const { Pool } = require('pg');
// const connectionString = 'postgresql://mattmortensen:blackshoes01@cryptic-sands-45425.herokuapp/fullstack_form_db';

const pool = new Pool({
  database: "fullstack_form_db",
  host: process.env.DATABASE_URL,
  user: "mattmortensen",
  password: "blackshoes01"
});

function postData(name, email) {
  pool.connect((err, client, done) => {
    client.query('INSERT INTO users (full_name, email) VALUES ($1, $2)', [name, email], (err, result) => {
      console.log(result);
      done();
    });
  })
}

function getData(table) {
  return new Promise((resolve, reject) => {
    pool.connect((err, client, done) => {
      client.query(`SELECT * FROM ${table}`, (err, res) => {

        if (err) {
          reject(new Error('whoops'));
        }

        resolve(res);
        done();
      });
    })
  });
}

pool.end();

module.exports = {
  postData: postData,
  getData: getData
}
