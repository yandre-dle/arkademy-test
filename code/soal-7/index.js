var express = require('express');
var server = express();

// Buat server statis untuk load html dan database
server.use('/', express.static(__dirname + '/'));

//Jalan di port 9000
server.listen(8080);