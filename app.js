var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json()); 
require('dotenv').config();

var http = require('http');
var socketio = require('socket.io');
var server = http.createServer(app);
var io = socketio(server);

var port = process.env.PORT || 3000; 
app.twitSettings = { searchKey: 'javascript'};

require('./twitter')(app, io); 


// LISTEN
server.listen(port, () => console.log('Server established...') );