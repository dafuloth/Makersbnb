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

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/views/index.html'))
})
app.get('/signUp', function(req, res) {
  res.sendFile(path.join(__dirname + '/views.signUp.html'));
});

app.post('/signUp', function(req, res) {
  if(req.query.username != undefined){
    db.signUp(req.query.username, req.query.email ,req.query.password)
  }
  console.log(req.query.username)
  res.redirect('/')
})

app.post('/login', function(req, res){
  res.send({login: true})
})

app.post('/addSpace', function(req, res){
  db.addSpace(
    req.query.name,
    req.query.description,
    req.query.price,
    req.query.owner)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
