const DB = require('../../common/localDB');

const getAll = async () => {
  return DB.getAllBoards();
};

const getById = async id => {
  const board = await DB.getBoard(id);
  if (!board) {
    throw new Error(`The board with id: ${id} has not been found`);
  }
  return board;
};

// const create = async user => DB.createUser(user);

// const update = async (id, updatedUser) => {
//   const user = await DB.updateUser(id, updatedUser);
//   if (!user) {
//     throw new Error(`The user with id: ${id} has not been found`);
//   }

//   return user;
// };

// const deleteById = async id => {
//   const user = await DB.deleteUser(id);
//   if (!user) {
//     throw new Error(`The user with id: ${id} has not been found`);
//   }

//   return user;
// };

module.exports = { getAll, getById };
