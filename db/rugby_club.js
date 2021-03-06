const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const rugbyClub = new Schema({
  clubName: { type: String, unique: true, required: true, dropDups: true },
  bio: String,
  latitude: String,
  longtitude: String,
  iconColor: String,
  imageBanner: String,
  governance: String
});

module.exports = mongoose.model('rugbyClub', rugbyClub);
