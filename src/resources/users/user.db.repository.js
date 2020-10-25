// const DB = require('../../common/localDB');
const User = require('./user.model');

const getAll = async () => {
  return User.find({});
};

const getById = async id => {
  return User.findOne({ _id: id });
};

const create = async user => {
  return User.create(user);
};

const update = async (id, updatedUser) => {
  return User.updateOne({ _id: id }, updatedUser);
};

const deleteById = async id => {
  return (await User.deleteOne({ _id: id })).deletedCount;
  // const user = await DB.deleteUser(id);
  // DB.unAssignTasks(id);
  // if (!user) {
  //   throw new Error(`The user with id: ${id} has not been found`);
  // }

  // return user;
};

module.exports = { getAll, getById, create, update, deleteById };
