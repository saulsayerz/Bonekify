const db = require('./db');
const helper = require('../helper');

async function getUsers(){
    const result = await db.query(
      `SELECT user_id, email, password, username, name, isAdmin FROM User`
    );
    const data = helper.emptyOrRows(result);
  
    return {data};
}

async function getDetailUser(username){
  const result = await db.query(
    `SELECT * FROM User WHERE username='${username}'`
  );
  const data = helper.emptyOrRows(result);

  return {data};
}

async function getUsernames(){
  const result = await db.query(
    `SELECT username FROM User`
  );
  const data = helper.emptyOrRows(result);

  return {data};
}

async function getEmails(){
  const result = await db.query(
    `SELECT email FROM User`
  );
  const data = helper.emptyOrRows(result);

  return {data};
}

async function getId(username){
  const result = await db.query(
    `SELECT user_id FROM User WHERE username='${username}'`
  );
  const data = helper.emptyOrRows(result);

  return {data};
}


async function createUser(username, password, email, name){
    const result = await db.query(
    `INSERT INTO User (email, password, username, name, isAdmin) VALUES ('${email}', '${password}', '${username}', '${name}', 0)`
    );
    
    let message = 'Error in creating user';
    if (result.affectedRows) {
      message = 'User created successfully';
    }

    return {message};
}

module.exports = {
    getUsers,
    getDetailUser,
    getUsernames,
    getEmails,
    getId,
    createUser
}