#Touch Rugby Locations


##Requirements
  - Node Version 4.3.2
  - git clone
  - `npm install`
  - `node server.js`
  - Mongo running in background

##Setup admin (will update with a better way when have more time)
  
  - `node` in terminal in app root

```
const mongoose = require('mongoose');
const adminUser = require('./db/adminUser');
mongoose.Promise = global.Promise;
const mongodb = process.env.MONGODB_URI || 'mongodb://localhost/touch_rugby_db';

mongoose.connect(mongodb, { config: { autoIndex: false } }, function(err) {
  if (err) {
    console.log('Could not connect to mongodb.');
  }
});

adminUser.register(new adminUser({username: 'admin'}), 'password', function(err) {
  if (err) {
    console.log('error while user register!', err);
    return next(err);
  }
  console.log('user registered!');
});

```

##Testing
  - `npm test`
  - `npm run lint`
