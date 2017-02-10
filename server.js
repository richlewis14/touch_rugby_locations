var express = require('express');
var bodyParser= require('body-parser')
var app = express();
var path = require("path");
var mongoUrl = 'mongodb://localhost:27017/touch_locations';
var MongoClient = require('mongodb').MongoClient
var db;

app.use(bodyParser.urlencoded({extended: true}))
// Serve Static files
app.use(express.static(path.join(__dirname, 'public')));

// Connect to db before launching app
MongoClient.connect(mongoUrl, (err, database) => {
  if (err) return console.log(err)
    db = database
    app.listen(3000, () => {
      console.log('App listening on 3000')
  })
})

// Form Page
app.get('/touch_locations_form', function(req, res) {
  res.sendFile('public/touch_location_form.html', { root : __dirname })
})

// Post Form
app.post('/locations', function(req, res) {
  db.collection('touch_locations').save(req.body, (err, result) => {
    if (err) return console.log(err)
      res.redirect('/')
    })
});