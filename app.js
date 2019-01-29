var express = require('express');
var app = express();
require('dotenv').config();
var port = process.env.PORT || 3000; 

var http = require('http');
var socketio = require('socket.io');
var server = http.createServer(app);
var io = socketio(server); 

var twitterStream = require('./twitter');
twitterStream.connect(io, 'Norway'); 

// LISTEN
server.listen(port, () => console.log('Server established...') );