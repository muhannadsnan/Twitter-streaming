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
app.twitSettings = { searchKey: bodyParser.bo};

// var name = req.body.name // the request sent here with the search term, pass it to twitter
require('./twitter')(app); 


// LISTEN
server.listen(port, () => console.log('Server established...') );