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

// const create = async board => DB.createBoard(board);

// const update = async (id, updatedBoard) => {
//   const board = await DB.updateBoard(id, updatedBoard);
//   if (!board) {
//     throw new Error(`The board with id: ${id} has not been found`);
//   }
//   return board;
// };

// const deleteById = async id => {
//   const board = await DB.deleteBoard(id);
//   if (!board) {
//     throw new Error(`The board with id: ${id} has not been found`);
//   }
//   return board;
// };

module.exports = { getAllByBoardId, getById };
