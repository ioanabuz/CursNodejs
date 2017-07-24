var express = require('express');
var app = express();
 
app.get('/', function (req, res) {
  res.send('Hello World');
})

app.post('/', function (req, res) {
  res.send('Heya Worlddddd');
})

app.get('/hello/world', function (req, res) {
  res.send('Hello World 222222');
})
 
app.listen(3000);

// Console will print server info
console.log('Server running at http://127.0.0.1:3000/' );