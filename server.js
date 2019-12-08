// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();
const path = require('path');


const http = require('http');

// app.get("/", (request, response) => {
  // console.log(Date.now() + " Ping Received");
  // response.sendStatus(200);
// });
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// http://expressjs.com/en/starter/basic-routing.html
// app.get('/', function(request, response) {
//   response.sendFile(__dirname + '/views/index.ejs');
// });

app.get('/', (req, res) => {
  res.render("index.ejs");
});

app.get('/if', (req, res) => {
  res.render("if.ejs");
});

app.get('/nop', (req, res) => {
  res.render("nop.ejs");
});

app.get('/bo', (req, res) => {
  res.render("bo.ejs");
});

app.get('/bo2', (req, res) => {
  res.render("bo2.ejs");
});

app.get('/io', (req, res) => {
  res.render("input.ejs");
});

app.get('/io2', (req, res) => {
  res.render("input2.ejs");
});

app.get('/io3', (req, res) => {
  res.render("input3.ejs");
});

app.get('/elif', (req, res) => {
  res.render("elif.ejs");
});

app.get('/elif2', (req, res) => {
  res.render("elif2.ejs");
});

app.get('/firl', (req, res) => {
  res.render("firl.ejs");
});

app.get('/firl2', (req, res) => {
  res.render("firl2.ejs");
});

app.get('/while', (req, res) => {
  res.render("while.ejs");
});

app.get('/while2', (req, res) => {
  res.render("while2.ejs");
});

app.get('/while3', (req, res) => {
  res.render("while3.ejs");
});

app.get('/functions', (req, res) => {
  res.render("functions.ejs");
});

// // listen for requests :)
// const listener = app.listen(process.env.PORT, function() {
//   console.log('Your app is listening on port ' + listener.address().port);
// });
