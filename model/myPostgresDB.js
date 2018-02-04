const { Pool } = require('pg');
// const connectionString = 'postgresql://mattmortensen:blackshoes01@cryptic-sands-45425.herokuapp/fullstack_form_db';

const pool = new Pool({
  database: "fullstack_form_db",
  host: process.env.DATABASE_URL,
  user: "mattmortensen",
  password: "blackshoes01"
});

function postData(name, email) {
  pool.query('INSERT INTO users (full_name, email) VALUES ($1, $2)', [name, email], (err, result) => {
    console.log(result);
  });
}

function getData(table) {
  return new Promise((resolve, reject) => {

    pool.query(`SELECT * FROM ${table}`, (err, res) => {

      if (err) {
        reject(new Error('whoops'));
      }

      resolve(res);
    });
  });
}

module.exports = {
  postData: postData,
  getData: getData
}
