const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const rugbyClub = new Schema({
  clubName: { type: String, unique: true, required: true, dropDups: true },
  bio: String,
});

module.exports = mongoose.model('rugbyClub', rugbyClub);
