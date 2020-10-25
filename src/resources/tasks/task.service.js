// const tasksRepo = require('./task.memory.repository');
const tasksRepo = require('./task.db.repository');

const getAllByBoardId = () => tasksRepo.getAllByBoardId();
const getById = id => tasksRepo.getById(id);
const create = task => tasksRepo.create(task);
const update = (id, updatedTask) => tasksRepo.update(id, updatedTask);
const deleteById = id => tasksRepo.deleteById(id);

module.exports = { getAllByBoardId, getById, create, update, deleteById };
