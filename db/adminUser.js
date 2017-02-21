const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const Schema = mongoose.Schema;

const adminUser = new Schema({
  nickname: String,
});

adminUser.plugin(passportLocalMongoose);
module.exports = mongoose.model('adminUser', adminUser);
