const DB = require('../../common/localDB');

const getAll = async () => {
  return DB.getAllUsers();
};

const getById = async id => {
  const user = await DB.getUser(id);
  if (!user) {
    throw new Error(`The user with id: ${id} have not been found`);
  }

  return user;
};

const create = async user => DB.createUser(user);

module.exports = { getAll, getById, create };
