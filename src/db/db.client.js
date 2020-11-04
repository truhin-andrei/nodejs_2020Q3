const mongoose = require('mongoose');
const { MONGO_CONNECTION_STRING } = require('../common/config');
const { hashPassword } = require('../common/passwordHasher');

const User = require('../resources/users/user.model');
// const Board = require('../resources/boards/board.model');
// const Task = require('../resources/tasks/task.model');

const connectToDB = cb => {
  mongoose.connect(MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', async () => {
    console.log("we're connected!");
    db.dropDatabase();
    User.insertMany([
      new User({
        name: 'admin',
        login: 'admin',
        password: await hashPassword('admin')
      }),
      new User({
        name: 'name2',
        login: 'login2',
        password: await hashPassword('password2')
      }),
      new User({
        name: 'name3',
        login: 'login3',
        password: await hashPassword('password3')
      })
    ]);
    cb();
  });
};

module.exports = connectToDB;
