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

app.get('/admin/main', (req, res) => {
  if (!req.user) {
    res.redirect('/admin');
    return;
  }
  res.render('admin_main', { user: req.user });
});

app.post('/admin', passport.authenticate('local', { failureRedirect: '/admin' }), function(req, res) {
  console.log(req.user);
  res.redirect('/admin/main');
});

app.get('/admin/sign_out', function(req, res) {
  req.logout();
  res.redirect('/admin');
});


app.listen(PORT);
console.log('App listening on %d', PORT);

module.exports = app;
