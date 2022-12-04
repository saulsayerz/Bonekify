const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const user = require('../services/user');
const jwtservice = require('../middleware/jwt');

router.get('/users', async function(req, res, next) {
  try {
    res.status(200).json(await user.getUsers());
  } catch (err) {
    console.error(`Error while getting list of users: `, err.message);
    res.status(400).json({message: 'Error while getting list of users: ' + err.message});
  }
});

router.post('/register', async function(req, res, next) {
  const { username, password, email, name } = req.body;
  try {
    const usernames = (await user.getUsernames())['data'];
    const emails = (await user.getEmails())['data'];
    if (usernames.some(e => e.username == username) || emails.some(e => e.email == email)) {
      throw new Error('email and/or username already exists');
    } 
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    const result = await user.createUser(username, hashPassword, email, name);
    const id = (await user.getId(username))['data'][0]['user_id'];

    const token = await jwtservice.generateAccessToken({ user_id: id, username: username, email: email, name: name }, 1800);

    res.status(200).json({message: "Register successful", user_id: id, username: username, email: email, name: name, isAdmin: 0, token: token });
  } catch (err) {
    console.error(`Error in creating user: `, err.message);
    res.status(400).json({message: 'Error in creating user: ' + err.message});
  }
});

router.post('/login', async function(req, res, next) {
  const { username, password } = req.body;
  try {
    const result = (await user.getDetailUser(username))['data'][0];
    if (!result) {
      throw new Error('username does not exist');
    }
    const comparePass = await bcrypt.compare(password, result['password']);
    if (!comparePass) {
      throw new Error('incorrect password');
    }
    const token = await jwtservice.generateAccessToken({ user_id: result['user_id'], username: result['username'], email: result['email'], name: result['name'] }, 1800);
    
    res.status(200).json({message: "Login successful", user_id: result['user_id'], username: result['username'], email: result['email'], name: result['name'], isAdmin: result['isAdmin'], token: token });
  } catch (err) {
    console.error(`Error logging in: `, err.message);
    res.status(400).json({message: 'Error logging in: ' + err.message});
  }
});
  
module.exports = router;