const boardsRepo = require('./board.memory.repository');

const getAll = () => boardsRepo.getAll();
const getById = id => boardsRepo.getById(id);
const create = board => boardsRepo.create(board);
// const update = (id, updatedUser) => usersRepo.update(id, updatedUser);
// const deleteById = id => usersRepo.deleteById(id);

module.exports = { getAll, getById, create };
