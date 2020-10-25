// const DB = require('../../common/localDB');
const Task = require('./task.model');

const getAllByBoardId = async () => {
  return Task.find({});
};

const getById = async id => {
  return Task.findOne({ _id: id });
};

const create = async task => {
  return Task.create(task);
};

const update = async (id, updatedTask) => {
  return Task.updateOne({ _id: id }, updatedTask);
};

const deleteById = async id => {
  return (await Task.deleteOne({ _id: id })).deletedCount;
};

const deleteTasksByBoardId = async id => {
  return (await Task.deleteMany({ boardId: id })).deletedCount;
};

const unAssignTasksByUserId = async id => {
  const res = await Task.updateMany({ userId: id }, { userId: null });
  return res.nModified;
};

module.exports = {
  getAllByBoardId,
  getById,
  create,
  update,
  deleteById,
  deleteTasksByBoardId,
  unAssignTasksByUserId
};
