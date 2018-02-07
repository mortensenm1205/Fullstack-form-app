const { Pool } = require('pg');
const connectionString = 'postgres://mattmortensen:blackshoes01@localhost/fullstack_form_db';

const pool = new Pool ({
  connectionString: connectionString
})




module.exports = {
  postData: postData,
  getData: getData
}
