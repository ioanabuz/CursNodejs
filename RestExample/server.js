var express = require('express');
var app = express();
var fs = require("fs");

app.get('/users', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
});

app.put('/users', function (req, res) {
   //handle create user
});

app.post('/users', function (req, res) {
   //handle update user
});

app.delete('/users', function (req, res) {
   //handle delete user
});

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

});