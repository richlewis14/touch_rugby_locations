const express = require('express');
const fileUpload = require('express-fileupload');
require('dotenv').config();
const mongoose = require('mongoose');
const passport = require('passport');
const Strategy = require('passport-local').Strategy;
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const adminUser = require('./db/adminUser');
const RugbyClub = require('./db/rugby_club');
const adminRoutes = require('./routes/adminRoutes');

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

// Register routes
app.use('/admin', adminRoutes);

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

app.listen(PORT);
console.log('App listening on %d', PORT);

module.exports = app;
