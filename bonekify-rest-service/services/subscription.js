const db = require('./db');
const helper = require('../helper');

async function getLaguPremium(creator_ids){
    const result = await db.query(
      `SELECT * FROM Song WHERE penyanyi_id IN (${creator_ids.join()})`
    );
    const data = helper.emptyOrRows(result);
    return data;
}

module.exports = {
    getLaguPremium
  }