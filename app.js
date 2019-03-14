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
var db = require('./src/databaseFunctions')
var User = require('./src/user');
var Spaces = require('./src/spaces');

console.log('Anybody there?');
console.log(__dirname)

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/views/index.html'))
})

app.get('/main.css', function(req, res) {
  res.sendFile(__dirname + '/views/main.css');
});

app.get('/signUp', function(req, res) {
  res.sendFile(path.join(__dirname + '/views/signUp.html'));
});

app.post('/signUp', function(req, res) {
  if(req.query.username != undefined){
    db.signUp(req.query.username, req.query.email ,req.query.password)
  }
})

app.post('/', function(req, res){
    res.redirect('/')
})

app.post('/login', async function(req, res){
  // console.log(db.login(req.query.username, req.query.password))
  bnbUser = new User()
  if(await bnbUser.login(req.query.username, req.query.password) == true){
    res.send({login: true})
  }else{
    res.send({login: false})
  }

})

app.post('/addSpace', function(req, res){
  db.addSpace(
    req.query.name,
    req.query.description,
    req.query.price,
    req.query.owner)
})

app.get('/getAllSpaces', async function(req, res) {
  bnbSpaces = new Spaces()
  res.send(await bnbSpaces.getAllSpaces());
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
