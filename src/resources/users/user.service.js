const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();
const getById = id => usersRepo.getById(id);
const create = user => usersRepo.create(user);
const update = (id, updatedUser) => usersRepo.update(id, updatedUser);
const deleteById = id => usersRepo.deleteById(id);

module.exports = { getAll, getById, create, update, deleteById };
