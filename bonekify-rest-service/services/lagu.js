const db = require('./db');
const helper = require('../helper');

async function getAllLagu(){
  const result = await db.query(
    `SELECT * FROM Song`
  );
  const data = helper.emptyOrRows(result);

  return {data};
}

async function getPenyanyiLagu(penyanyi_id){
    const result = await db.query(
      `SELECT * FROM Song WHERE penyanyi_id=${penyanyi_id}`
    );
    const data = helper.emptyOrRows(result);
  
    return data;
}

async function getLagu(song_id){
  const result = await db.query(
    `SELECT * FROM Song WHERE song_id=${song_id}`
  );
  const data = helper.emptyOrRows(result);

  return {data};
}

async function createLagu(judul, penyanyi_id, audio_path){
    const result = await db.query(
    `INSERT INTO Song (judul, penyanyi_id, audio_path) VALUES ('${judul}', ${penyanyi_id}, '${audio_path}')`
    );
    
    let message = 'Error in adding song';
    if (result.affectedRows) {
      message = 'Song added successfully';
    }

    return {message};
}

async function updateJudulLagu(song_id, judul){
  const result = await db.query(
  `UPDATE Song SET judul = '${judul}' WHERE song_id = ${song_id}`
  );
  
  let message = 'Error in updating song';
  if (result.affectedRows) {
    message = 'Song updated successfully';
  }

  return {message};
}

async function updatePathLagu(song_id, audio_path){
  const result = await db.query(
  `UPDATE Song SET audio_path = '${audio_path}' WHERE song_id = ${song_id}`
  );
  
  let message = 'Error in updating song';
  if (result.affectedRows) {
    message = 'Song updated successfully';
  }

  return {message};
}

async function deleteLagu(song_id){
  const result = await db.query(
  `DELETE FROM Song WHERE song_id = ${song_id}`
  );
  
  let message = 'Error in deleting song';
  if (result.affectedRows) {
    message = 'Song deleted successfully';
  }

  return {message};
}

async function latestId(){
  const result = await db.query(
    `SELECT MAX(song_id) AS song_id FROM Song`
  );
  const data = helper.emptyOrRows(result);

  return {data};
}

module.exports = {
  getAllLagu,
  getPenyanyiLagu,
  getLagu,
  createLagu,
  updateJudulLagu,
  updatePathLagu,
  deleteLagu,
  latestId
}