const express = require('express');
const fileUpload = require('express-fileupload');
const fs = require('fs');
require('dotenv').config();
const mongoose = require('mongoose');
const passport = require('passport');
const Strategy = require('passport-local').Strategy;
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('connect-flash');
const adminUser = require('./db/adminUser');
const RugbyClub = require('./db/rugby_club');
const adminRoutes = require('./routes/adminRoutes');
const mailerRoutes = require('./routes/mailerRoutes');

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
// setup cookies and sessions for maintaining login state and flash messages.
// Grab sessions

app.use(session({ 
    cookie: { maxAge: new Date(Date.now() + (60 * 60 * 24 * 7 * 1000)) },
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true 
}));
app.use(flash());
app.use(function(req, res, next) {
  res.locals.success = req.flash('success');
  res.locals.error = req.flash('error');
  next();
});

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

// Register routes
app.use('/admin', adminRoutes);
app.use('/changeInfo', mailerRoutes);

app.get('/', function(req, res) {
  RugbyClub.count({}, (err, count) => {
    if (err) {
      res.render('index', { count: [] });
      return;
    }
    res.render('index', { count: count });
  });

});

app.get('/touchmap', function(req, res) {
  RugbyClub.find({}, (err, results) => {
    if (err) {
      res.render('touchmap', { clubs: [] });
      return;
    }
    res.render('touchmap', { clubs: results });
  });
});

app.get('/sitemap.xml', function(req, res) {
  res.set('Content-Type', 'application/xml');
  res.send(fs.readFileSync('sitemap.xml', {encoding: 'utf-8'}))
});

app.listen(PORT);
console.log('App listening on %d', PORT);

module.exports = app;
