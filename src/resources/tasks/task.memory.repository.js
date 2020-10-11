const DB = require('../../common/localDB');

const getAllByBoardId = async () => {
  return DB.getAllTasksByBoardId();
};

const getById = async id => {
  const task = await DB.getTask(id);
  if (!task) {
    throw new Error(`The task with id: ${id} has not been found`);
  }
  return task;
};

const create = async task => DB.createTask(task);

const update = async (id, updatedTask) => {
  const task = await DB.updateTask(id, updatedTask);
  if (!task) {
    throw new Error(`The task with id: ${id} has not been found`);
  }
  return task;
};

// const deleteById = async id => {
//   const task = await DB.deleteTask(id);
//   if (!task) {
//     throw new Error(`The task with id: ${id} has not been found`);
//   }
//   return task;
// };

module.exports = { getAllByBoardId, getById, create, update };
