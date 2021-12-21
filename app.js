
var express = require('express');
var app = express();
var serv = require('http').Server(app);
var fs = require('fs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const config = require('./properties.json');


app.get('/',function(req, res){
	res.sendFile(__dirname + '/index.html');
});

app.post('/',function(req, res){
    
    console.log(req.body)
	res.send(req.body);
});

app.param('name', function(req, res, next, name) {
  console.log("GOT IT");
  console.log(req.body);
  console.log(name);
  next();
});


serv.listen(config.properties.port);
console.log("Server started.");