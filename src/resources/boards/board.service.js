const boardsRepo = require('./board.memory.repository');

const getAll = () => boardsRepo.getAll();
// const getById = id => usersRepo.getById(id);
// const create = user => usersRepo.create(user);
// const update = (id, updatedUser) => usersRepo.update(id, updatedUser);
// const deleteById = id => usersRepo.deleteById(id);

module.exports = { getAll };
