/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
/* eslint-disable quotes */
/* eslint-disable prefer-template */
/* eslint-disable no-unused-vars */
/* eslint-disable vars-on-top */
/* eslint-disable no-var */
/* eslint-disable semi */

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

const fs = require('fs');
const http = require('http');

const router = express.Router();
const path = require('path');
const db = require('./src/databaseFunctions');
const User = require('./src/user');
const Spaces = require('./src/spaces');

let space;
let bnbSpaces;
let bnbUser;

console.log('Anybody there?');
console.log(__dirname);

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/views/index.html'));
});

app.get('/main.css', function (req, res) {
  res.sendFile(__dirname + '/views/main.css');
});


app.get('/signUp', function (req, res) {
  res.sendFile(path.join(__dirname + '/views/signUp.html'));
});

app.post('/signUp', function (req, res) {
  if (req.query.username !== undefined) {
    db.signUp(req.query.username, req.query.email, req.query.password);
  }
});

app.post('/', function (req, res) {
  res.redirect('/');
});

app.post('/login', async function (req, res) {
  // console.log(db.login(req.query.username, req.query.password))
  bnbUser = new User();
  if (await bnbUser.login(req.query.username, req.query.password) === true) {
    res.send({ login: true });
  } else {
    res.send({ login: false });
  }
});

app.post('/addSpace', async function (req, res) {
  try {
    await db.addSpace(
    bnbUser.userId,
    req.query.name,
    req.query.description,
    req.query.price,
    );
  }catch{

  };
  try {
    var test = await db.findSpace(req.query.name)
    console.log(test)

  } catch {

  }
  res.send()
});

app.get('/getSpaces', async function (req, res) {
  bnbSpaces = new Spaces();
  res.send(await bnbSpaces.getAllSpaces());
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.get('/space', function (req, res) {
  space = req.query.spaceid;
  res.sendFile(path.join(__dirname + '/views/space.html'));
});

app.get('/spaceinfo', function (req, res) {
  console.log("Hello");
  res.send(bnbSpaces.requestSpace(space));
});
