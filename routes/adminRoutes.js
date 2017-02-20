// Admin routes
const router = require('express').Router();
const passport = require('passport');
const s3Helper = require('../helpers/s3Helper.js');
const RugbyClub = require('../db/rugby_club');

router.get('/', (req, res) => {
  req.logout();
  res.render('admin_login');
});

router.post('/', passport.authenticate('local', { failureRedirect: '/admin' }), (req, res) => {
  res.redirect('/admin/main');
});

router.get('/sign_out', (req, res) => {
  req.logout();
  res.redirect('/admin');
});

router.get('/main', (req, res) => {
  if (!req.user) {
    res.redirect('/admin');
    return;
  }
  res.render('admin_main', { user: req.user });
});

router.get('/clubs', (req, res) => {
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

router.post('/addClub', (req, res) => {
  if (!req.user) {
    res.redirect('/admin');
    return;
  }
  s3Helper.uploadToS3(req.files).then((data) => {
    const publicUrl = `https://s3-eu-west-1.amazonaws.com/${process.env.AWS_BUCKET}/${data.Key}`;
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
    console.log('Public URL is ', publicUrl);
    newClub.save((error) => {
      if (error) {
        console.log('Error: unable to add new club: ', error);
        res.redirect('/admin/main');
      } else {
        console.log('club saved');
        res.redirect('/admin/main');
      }
    });
  }).catch((err) => {
    console.error('Error uploading to S3', err);
  });
});


// Remove Club
router.post('/removeClub/:id', (req, res) => {
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
router.get('/editClub/:id', (req, res) => {
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
router.post('/editClub/:id', (req, res) => {
  if (!req.user) {
    res.redirect('/admin');
    return;
  }
  // Add update of S3 bucket image here if needed
  RugbyClub.update(
    // Find user with id
    { _id: req.params.id },
    // Update fields
    { clubName: req.body.name,
      latitude: req.body.latitude,
      longtitude: req.body.longtitude,
      bio: req.body.bio,
      iconColor: req.body.iconColor,
    }).exec(function(err) {
      if (err) {
        console.log('Something went wrong', err);
      } else {
        console.log('club updated');
      }
    });
  res.render('admin_main', { user: req.user });
});


module.exports = router;
