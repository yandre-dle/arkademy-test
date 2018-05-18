var express = require('express');
var server = express();

// Buat server statis untuk load html dan database
server.use('/', express.static(__dirname + '/'));

//Jalan di port 8000
server.listen(8000);