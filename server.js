const express = require('express');
var fileUpload = require('express-fileupload');
const AWS = require('aws-sdk');
require('dotenv').config();
var pry = require('pryjs');
const mongoose = require('mongoose');
const passport = require('passport');
const Strategy = require('passport-local').Strategy;
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const adminUser = require('./db/adminUser');
const RugbyClub = require('./db/rugby_club');

const Helper = require('./helpers/helper.js');
const helper = new Helper();

const PORT = process.env.PORT || 3000;

mongoose.Promise = global.Promise;
passport.use(new Strategy(adminUser.authenticate()));
passport.serializeUser(adminUser.serializeUser());
passport.deserializeUser(adminUser.deserializeUser());

const mongodb = process.env.MONGODB_URI || 'mongodb://localhost/touch_rugby_db';

mongoose.connect(mongodb, { config: { autoIndex: false } }, function(err) {
  if (err) {
    console.log('Could not connect to mongodb.');
  }
});

const app = express();
// setup cookies and sessions for maintaining login state.
app.use(cookieParser());
app.use(require('express-session')({ secret: 'thisneedsChanging', resave: false, saveUninitialized: false }));

app.use(passport.initialize());
app.use(passport.session());


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.set('views', './views');
app.use(express.static('./public'));
app.set('view engine', 'ejs');

app.use(fileUpload());


app.get('/', function(req, res) {
  RugbyClub.find({}, (err, results) => {
    if (err) {
      console.log('Error obtaining club records');
      res.render('index', { clubs: [] });
      return;
    }
    res.render('index', { clubs: results });
  });
});

// admin login for adding new clubs
app.get('/admin', (req, res) => {
  req.logout();
  res.render('admin_login');
});

app.post('/admin', passport.authenticate('local', { failureRedirect: '/admin' }), function(req, res) {
  res.redirect('/admin/main');
});

app.get('/admin/sign_out', function(req, res) {
  req.logout();
  res.redirect('/admin');
});

app.get('/admin/main', (req, res) => {
  if (!req.user) {
    res.redirect('/admin');
    return;
  }
    res.render('admin_main', { user: req.user });
});

// Show list of clubs
app.get('/admin/clubs', (req, res) => {
  if (!req.user) {
    res.redirect('/admin');
    return;
  }

  RugbyClub.find({}, (err, results) => {
    if (err) {
      console.log('Error obtaining club records');
      res.render('admin_clubs', { user: req.user, clubs: [] });
      return;
    }
    res.render('admin_clubs', { user: req.user, clubs: results });
  });
});

// Add Club
app.post('/admin/addClub', (req, res) => {
  if (!req.user) {
    res.redirect('/admin');
    return;
  }

  // Upload image to S3
  var s3Bucket = new AWS.S3( { params: { Bucket: process.env.AWS_BUCKET, Key: process.env.AWS_ACCESS_KEY_ID } } )
  var data = { Key: req.files.imageBanner.name,
               Body: req.files.imageBanner.data,
               ACL: "public-read",
               ContentType: helper.getContentTypeByFile(req.files.imageBanner.name)
             };

  s3Bucket.putObject(data, function(err){
    if (err) 
    { console.log('Error uploading data:'); 
    } else {
      console.log('Uploaded data:'); 
    }
  });
  
  const publicUrl = "https://s3-eu-west-1.amazonaws.com/" + process.env.AWS_BUCKET + "/" + data.Key
  const club = req.body.name;
  const bio = req.body.bio;
  const latitude = req.body.latitude;
  const longtitude = req.body.longtitude;
  const iconColor = req.body.iconColor;
  const imageBanner = publicUrl;
  const newClub = new RugbyClub();
  newClub.clubName = club;
  newClub.bio = bio;
  newClub.latitude = latitude;
  newClub.longtitude = longtitude;
  newClub.iconColor = iconColor;
  newClub.imageBanner = imageBanner;
  console.log("Public URL is " + publicUrl);
  newClub.save((error) => {
    if (error) {
      console.log('Error: unable to add new club: ', error);
      res.redirect('/admin/main');
    } else {
      console.log('club saved');
      res.redirect('/admin/main');
    }
  });
});

// Remove Club
app.post('/admin/removeClub/:id', (req, res) => {
  if (!req.user) {
    res.redirect('/admin');
    return;
  }

  // Add deletion of S3 bucket image here
  RugbyClub.remove(req.params.id, function(err) {
    if (err) {
      console.log('Something went wrong', err);
    } else {
      console.log('club deleted');
    }
  });

});

// Edit Club, need to finish
app.get('/admin/editClub/:id', (req, res) => {
 if (!req.user) {
    res.redirect('/admin');
    return;
  }

  RugbyClub.find(req.params.id, (err, result) => {
    if (err) {
      console.log('Error obtaining club record');
      res.render('admin_edit', { user: req.user, club: [] });
      return;
    }
    res.render('admin_edit', { user: req.user, club: result });
  });

});

// Update Rugby club
app.post('/admin/editClub/:id', (req, res) => {
  if (!req.user) {
    res.redirect('/admin');
    return;
  }
  // Add update of S3 bucket image here if needed
  RugbyClub.update(
    // Find user with id
    {_id: req.params.id},
    // Update fields
    { clubName: req.body.name,
      latitude: req.body.latitude,
      longtitude: req.body.longtitude,
      bio: req.body.bio,
      iconColor: req.body.iconColor
    }).exec(function(err, result) {
    if (err) {
      console.log('Something went wrong', err);
    } else {
      console.log('club updated');
    }

  });
  res.render('admin_main', { user: req.user });

});

app.listen(PORT);
console.log('App listening on %d', PORT);

module.exports = app;
