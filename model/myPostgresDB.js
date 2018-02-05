const { Pool } = require('pg');


const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

console.log(process.env.DATABASE_URL + "some text");

function postData(name, email) {
  pool.connect((err, client, done) => {
    client.query('INSERT INTO users (full_name, email) VALUES ($1, $2)', [name, email], (err, result) => {
      console.log(result + "some more new text");
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
        resolve(result);
      });
    });
  });
}


module.exports = {
  postData: postData,
  getData: getData
}
