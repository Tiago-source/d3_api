const db = require('./db');
const config = require('../config');

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

async function getMultiple(){

 var number = randomIntFromInterval(6000, 8007);
  const rows = await db.query(
    `SELECT * 
    FROM mytable LIMIT ${number}`
  );
  const data = rows;


  return {
    data
  }
}

async function getByYear(){
     const rows = await db.query(
        'SELECT release_year as year ,COUNT(show_id) as count FROM `mytable` GROUP BY release_year' 
     );
     const data = rows;
     return {
       data
     }
   }

   async function getByType(){
    const rows = await db.query(
       'SELECT type as date ,COUNT(show_id) as count FROM `mytable` GROUP BY type;' 
    );
    const data = rows;
    return {
      data
    }
  }

  async function getByCountry(){
    const rows = await db.query(
       'SELECT country as year, count(show_id) as count FROM `mytable` group by country order by COUNT DESC LIMIT 17;' 
    );
    const data = rows;
    return {
      data
    }
  }


  async function getByRelease(){
    const rows = await db.query(
       '  SELECT release_year as year ,COUNT(show_id) as count FROM `mytable` GROUP BY release_year' 
    );
    const data = rows;
    return {
      data
    }
  }

  async function getByCat(){
    const rows = await db.query(
       'SELECT `listed_in` AS date, COUNT(show_id) as count FROM `mytable` group by listed_in ORDER BY count DESC LIMIT 15;' 
    );
    const data = rows;
    return {
      data
    }
  }



 

module.exports = {
  getMultiple,
  getByYear,
  getByType,
  getByCountry,
  getByRelease,
  getByCat
}