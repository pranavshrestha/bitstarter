var express = require('express');
var fs = require('fs');
var fileName = "index.html";

var app = express.createServer(express.logger());

function readFileContents(fileName) {
  var buf = new Buffer(fs.readFileSync(fileName));
  return buf.toString();
}


app.get('/', function(request, response) {
  response.send(readFileContents(fileName));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
