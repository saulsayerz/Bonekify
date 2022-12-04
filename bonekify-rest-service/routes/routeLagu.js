const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const lagu = require('../services/lagu');
const jwtservice = require('../middleware/jwt');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)) //Appending extension
  }
})

const upload = multer({ storage: storage });

router.get('/auth/read/all', jwtservice.authenticateToken, async function (req, res) {
  try {
    res.status(200).json(await lagu.getAllLagu());
  } catch (err) {
    console.error(`Error while getting list of songs: `, err.message);
    res.status(400).json({message: 'Error while getting list of songs: ' + err.message});
  }
});

router.get('/auth/read/penyanyi', jwtservice.authenticateToken, async function (req, res) {
  try {
    const penyanyi_id = (await jwt.verify(req.headers['authorization'], process.env.TOKEN_SECRET))['user_id'];
    res.status(200).json(await lagu.getPenyanyiLagu(penyanyi_id));
  } catch (err) {
    console.error(`Error while getting list of songs: `, err.message);
    res.status(400).json({message: 'Error while getting list of songs: ' + err.message});
  }
});

router.get('/auth/read/lagu', jwtservice.authenticateToken, async function (req, res) {
  try {
    const result = (await lagu.getLagu(req.query.song_id));
    if (!(result['data'][0])) {throw new Error('song_id invalid');}
    const user_id = (await jwt.verify(req.headers['authorization'], process.env.TOKEN_SECRET))['user_id'];

    if (result['data'][0]['penyanyi_id'] != user_id) {
      throw new Error('song not owned by singer');
    }
    res.status(200).json(result);
  } catch (err) {
    console.error(`Error while getting song information: `, err.message);
    res.status(400).json({message: 'Error while getting song information: ' + err.message});
  }
});

router.post('/auth/create', jwtservice.authenticateToken, upload.single("audio_path"), async function(req, res) {
  const penyanyi_id = (await jwt.verify(req.headers['authorization'], process.env.TOKEN_SECRET))['user_id'];
  const { judul } = req.body;
  try {
    const result = await lagu.createLagu(judul, penyanyi_id, req.file.filename);
    const song_id = (await lagu.latestId())['data'][0]['song_id'];

    res.status(200).json({message: "Song successfully added", song_id: song_id, judul: judul, penyanyi_id: penyanyi_id, audio_path: req.file.filename});
  } catch (err) {
    console.error(`Error in creating user: `, err.message);
    res.status(400).json({message: 'Error in creating user: ' + err.message});
  }
});

router.put('/auth/update/judul', jwtservice.authenticateToken, async function (req, res) {
  try {
    const penyanyi_id = (await lagu.getLagu(req.body['song_id']))['data'][0];
    if (!penyanyi_id) {throw new Error('song_id invalid');}
    const user_id = (await jwt.verify(req.headers['authorization'], process.env.TOKEN_SECRET))['user_id'];

    if (penyanyi_id['penyanyi_id'] != user_id) {
      throw new Error('song not owned by singer');
    }
    res.status(200).json(await lagu.updateJudulLagu(req.body['song_id'], req.body['judul']));
  } catch (err) {
    console.error(`Error while getting song information: `, err.message);
    res.status(400).json({message: 'Error while getting song information: ' + err.message});
  }
});

router.put('/auth/update/audio_path', jwtservice.authenticateToken, upload.single("audio_path"), async function (req, res) {
  try {
    const penyanyi_id = (await lagu.getLagu(req.body['song_id']))['data'][0];
    if (!penyanyi_id) {throw new Error('song_id invalid');}
    const user_id = (await jwt.verify(req.headers['authorization'], process.env.TOKEN_SECRET))['user_id'];

    if (penyanyi_id['penyanyi_id'] != user_id) {
      throw new Error('song not owned by singer');
    }
    res.status(200).json(await lagu.updatePathLagu(req.body['song_id'], req.file.filename));
  } catch (err) {
    console.error(`Error while getting song information: `, err.message);
    res.status(400).json({message: 'Error while getting song information: ' + err.message});
  }
});

router.delete('/auth/delete', jwtservice.authenticateToken, async function (req, res) {
  try {
    const penyanyi_id = (await lagu.getLagu(req.body['song_id']))['data'][0];
    if (!penyanyi_id) {throw new Error('song_id invalid');}
    const user_id = (await jwt.verify(req.headers['authorization'], process.env.TOKEN_SECRET))['user_id'];

    if (penyanyi_id['penyanyi_id'] != user_id) {
      throw new Error('song not owned by singer');
    }
    res.status(200).json(await lagu.deleteLagu(req.body['song_id']));
  } catch (err) {
    console.error(`Error while getting song information: `, err.message);
    res.status(400).json({message: 'Error while getting song information: ' + err.message});
  }
});
  
module.exports = router;