var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended:true }));
app.use('/', express.static('public'));

app.post('/', (req, res) => {
  res.send('post recieved');
});

app.get('/passed', (req, res) => {
  res.send('hello');
})

app.listen(9000);
