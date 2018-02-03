var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended:true }));
app.use('/', express.static('public'));

app.post('/', (req, res) => {
  res.send('text');
  console.log(req.body);
});

app.get('/passed', (req, res) => {
  res.send('post recieved');
})

app.listen(9000, () => {
  console.log('Running on PORT 9000');
})
