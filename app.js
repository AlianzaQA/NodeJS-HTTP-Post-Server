
//Getting the express and server packages

var express = require('express');
var app = express();
var serv = require('http').Server(app);
var fs = require('fs');


//Including a express.json()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Getting the properties Json file
const config = require('./properties.json');

//Setting up the 'Get' Request: it will return index.html
app.get('/',function(req, res){
	res.sendFile(__dirname + '/index.html');
});


//Setting up the 'post' request: it will return the parameters in the request body
app.post('/',function(req, res){
    
    console.log(req.body)
	res.send(req.body);
});

//Activating the server
serv.listen(config.properties.port);
console.log("Server started.");