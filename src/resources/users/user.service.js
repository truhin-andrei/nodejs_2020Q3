const usersRepo = require('./user.db.repository');
const { hashPassword } = require('../../common/passwordHasher');

const getAll = () => usersRepo.getAll();
const getById = id => usersRepo.getById(id);
const create = async user => {
  const hashedPassword = await hashPassword(user.password);
  return usersRepo.create({ ...user, password: hashedPassword });
};
const update = async (id, updatedUser) => {
  const hashedPassword = await hashPassword(updatedUser.password);
  return usersRepo.update(id, { ...updatedUser, password: hashedPassword });
};
const deleteById = id => usersRepo.deleteById(id);

module.exports = { getAll, getById, create, update, deleteById };
