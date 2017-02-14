const mongoose = require('mongoose');

const adminUser = require('./db/adminUser');

mongoose.Promise = global.Promise;
const mongodb = process.env.MONGODB_URI || 'mongodb://localhost/touch_rugby_db';

namespace('test', function () {
  desc('Create Admin User');
  task('createAdminUser', [], function () {
    // Connect to db
    mongoose.connect(mongodb, { config: { autoIndex: false } }, function(err) {
      if (err) {
        console.log('Could not connect to mongodb.');
      }
    });
    // Register admin user
    adminUser.register(new adminUser({ username: 'admin' }), 'password', function(err) {
      if (err) {
        console.log('error while user register!', err);
      }
      console.log('user registered!');
      mongoose.disconnect();
    });
  });
});

namespace('test', function () {
  desc('Delete Admin User');
  task('deleteAdminUser', [], function () {
    mongoose.connect(mongodb, (err) => {
      if (err) {
        console.log('Could not connect to mongodb.', err);
      }
      adminUser.remove({ username: 'admin' }, function(error) {
        if (error) return console.log('error while removing user!', error);
        if (!error) return console.log('User removed');
      });
    });
    mongoose.disconnect();
  });
});
