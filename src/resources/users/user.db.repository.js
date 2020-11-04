const User = require('./user.model');
const { unAssignTasksByUserId } = require('../tasks/task.db.repository');

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
  unAssignTasksByUserId(id);
  return (await User.deleteOne({ _id: id })).deletedCount;
};

const getByProp = async prop => {
  return User.findOne(prop);
};

module.exports = { getAll, getById, create, update, deleteById, getByProp };
