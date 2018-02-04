var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var pg = require('./myPostgresDB.js');

app.use(bodyParser.urlencoded({ extended:true }));
app.use('/', express.static('public'));

app.post('/', (req, res) => {
  pg.postData(req.body.full_name, req.body.email);
  res.send('post recieved');
});

app.get('/passed', (req, res) => {
  pg.getData('users').then((result) => {
    res.send(`Hello ${result.rows[result.rows.length - 1].full_name}, your email is now under: ${result.rows[result.rows.length - 1].email}`);
  }).catch((err) => {
    console.log(err);
  });
})

app.listen(process.env.PORT || 9000, '0.0.0.0', () => {
  console.log('Running on PORT ' + );
})
