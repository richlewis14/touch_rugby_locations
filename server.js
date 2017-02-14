const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const Strategy = require('passport-local').Strategy;
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const adminUser = require('./db/adminUser');
const RugbyClub = require('./db/rugby_club');

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


app.get('/', function(req, res) {
  res.render('index');
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
  RugbyClub.find({}, (err, results) => {
    if (err) {
      console.log('Error obtaining club records');
      res.render('admin_main', { user: req.user, clubs: [] });
      return;
    }
    res.render('admin_main', { user: req.user, clubs: results });
  });
});

app.post('/admin/addClub', (req, res) => {
  if (!req.user) {
    res.redirect('/admin');
    return;
  }
  const club = req.body.name;
  const bio = req.body.bio;
  const latitude = req.body.latitude;
  const longtitude = req.body.longtitude;
  const newClub = new RugbyClub();
  newClub.clubName = club;
  newClub.bio = bio;
  newClub.latitude = latitude;
  newClub.longtitude = longtitude;
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

app.listen(PORT);
console.log('App listening on %d', PORT);

module.exports = app;
