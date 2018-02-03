const { Pool } = require('pg');
const connectionString = 'postgresql://mattmortensen:blackshoes01@localhost/fullstack_form_db';

const pool = new Pool({
  connectionString: connectionString
});

const values = ["Bobby Boi", "bob@bobby.com"];

pool.query('INSERT INTO users (full_name, email) VALUES ($1, $2)', values, (err, res) => {});

pool.query('SELECT * FROM users', (err, res) => {
  console.log(err, res.rows);
  pool.end();
});
