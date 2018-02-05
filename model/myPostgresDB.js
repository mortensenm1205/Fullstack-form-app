const { Pool } = require('pg');


const pool = new Pool({
  database: "fullstack_form_db",
  host: process.env.DATABASE_URL,
  user: "mattmortensen",
  password: "blackshoes01"
});

console.log(process.env.DATABASE_URL);

function postData(name, email) {
  pool.connect((err, client, done) => {
    client.query('INSERT INTO users (full_name, email) VALUES ($1, $2)', [name, email], (err, result) => {
      console.log(result);
      done();
    });
  });
  pool.end();
}

function getData(table) {
  return new Promise((resolve, reject) => {
    pool.connect((err, client, done) => {
      client.query(`SELECT * FROM ${table}`, (err, result) => {

        if (err) {
          reject(new Error('whoops'));
        }
        done();
        resolve(result);
      });
    });
    pool.end();
  });
}


module.exports = {
  postData: postData,
  getData: getData
}
