const { Pool, Client } = require('pg');
const connectionString = 'postgresql://mattmortensen:blackshoes01@localhost/fullstack_form_db';

const pool = new Pool({
  connectionString: connectionString
});

function postData(name, email) {
  pool.query('INSERT INTO users (full_name, email) VALUES ($1, $2)', [name, email], (err, res) => {});
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











// const values = ["Bobby Boi", "bob@bobby.com"];

// pool.query('SELECT * FROM users', (err, res) => {
//   console.log(err, res.rows[1]);
//   pool.end();
// });

//
// const client = new Client({
//   database: 'fullstack_form_db'
// });
//
// client.connect();
//
// client.query('SELECT * FROM users', (err, res) => {
//   console.log(err, res.rows[0]);
//   client.end();
// })
