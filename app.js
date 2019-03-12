// Server Software

// run server
// Load html
// Connect to db

// user goes onto website
// Display home page
// enter user screen
// user puts in sign up details

// post request sent to Server
// server creates a user record for the new user

//
const express = require('express');
const app = express();
const port = 8080;

var fs = require('fs');
var http = require('http');
var router = express.Router();
var path = require('path')


console.log('Anybody there?');
console.log(__dirname)
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/signUp.html'));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
