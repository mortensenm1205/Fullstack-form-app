const { Pool } = require('pg');
const connectionString = 'postgres://mattmortensen:blackshoes01@localhost/fullstack_form_db';

const pool = new Pool ({
  connectionString: connectionString
})

function postData(value1, value2, cb) {
  pool.connect(function (err, client, done) {
    client.query('INSERT INTO users (full_name, email) VALUES ($1, $2)', [value1, value2], function(err, results) {
      cb(err, results);
    });
  });
};


module.exports = {
  postData: postData
}
