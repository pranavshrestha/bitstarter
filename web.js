var express = require('express');
var fs = require('fs');
var fileName = "index.html";
var buffer = new Buffer(25);

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(buffer.toString(fs.readFileSync(fileName)));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
