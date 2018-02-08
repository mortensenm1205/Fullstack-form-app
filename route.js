var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var pg = require('./model/myPostgresDB.js');

app.use(bodyParser.urlencoded({ extended:true }));
app.use('/', express.static('public'));

app.post('/', (req, res) => {
  pg.postData(req.body.full_name, req.body.email, function(err, results) {});
  res.send('post recieved');
});

app.get('/passed', (req, res) => {
  res.send('hello');
})

app.listen(9000);
