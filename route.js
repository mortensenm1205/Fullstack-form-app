var express = require('express');
var app = express();

app.use('/', express.static('public'));

app.post('/', (req, res) => {
  res.send('post recieved');
});

app.listen(9000, () => {
  console.log('Running on PORT 9000');
})
