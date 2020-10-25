const mongoose = require('mongoose');
const { MONGO_CONNECTION_STRING } = require('../common/config');

const User = require('../resources/users/user.model');

const connectToDB = cb => {
  mongoose.connect(MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    console.log("we're connected!");
    db.dropDatabase();
    User.insertMany([
      new User({ name: 'name1', login: 'login1', password: 'password1' }),
      new User({ name: 'name2', login: 'login2', password: 'password2' }),
      new User({ name: 'name3', login: 'login3', password: 'password3' })
    ]);
    cb();
  });
};

module.exports = connectToDB;
