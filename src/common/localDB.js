const User = require('../resources/users/user.model');

const DB = {
  users: [],
  boards: [],
  tasks: []
};

DB.users.push(new User(), new User(), new User(), new User());

const getAllUsers = async () => {
  return [...DB.users];
};

const getUser = async id => DB.users.filter(el => el.id === id)[0];

const createUser = async user => {
  DB.users.push(user);
  return user;
};

module.exports = { getAllUsers, getUser, createUser };
