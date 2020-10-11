const boardsRepo = require('./board.memory.repository');

const getAll = () => boardsRepo.getAll();
const getById = id => boardsRepo.getById(id);
const create = board => boardsRepo.create(board);
const update = (id, updatedBoard) => boardsRepo.update(id, updatedBoard);
// const deleteById = id => boardsRepo.deleteById(id);

module.exports = { getAll, getById, create, update };
