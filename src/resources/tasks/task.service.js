const tasksRepo = require('./task.memory.repository');

const getAllByBoardId = () => tasksRepo.getAllByBoardId();
// const getById = id => tasksRepo.getById(id);
// const create = board => tasksRepo.create(board);
// const update = (id, updatedBoard) => tasksRepo.update(id, updatedBoard);
// const deleteById = id => tasksRepo.deleteById(id);

module.exports = { getAllByBoardId };
