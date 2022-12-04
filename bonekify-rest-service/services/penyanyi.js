const db = require('./db');
const helper = require('../helper');

async function getPenyanyi(){
    const rows = await db.query(
      `SELECT user_id, name
      FROM User WHERE isAdmin=0`
    );
    const data = helper.emptyOrRows(rows);
  
    return {data};
}

async function getDetailPenyanyi(user_id){
  const rows = await db.query(
    `SELECT user_id, name
    FROM User WHERE user_id=${user_id}`
  );
  const data = helper.emptyOrRows(rows);

  return {data};
}

module.exports = {
    getPenyanyi,
    getDetailPenyanyi
}