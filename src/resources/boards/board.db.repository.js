// const DB = require('../../common/localDB');
const Board = require('./board.model');

const { deleteTasksByBoardId } = require('../tasks/task.db.repository');

const getAll = async () => {
  return Board.find({});
};

const getById = async id => {
  return Board.findOne({ _id: id });
};

const create = async board => {
  return Board.create(board);
};

const update = async (id, updatedBoard) => {
  return Board.updateOne({ _id: id }, updatedBoard);
};

const deleteById = async id => {
  deleteTasksByBoardId(id);
  return (await Board.deleteOne({ _id: id })).deletedCount;
  // const board = await DB.deleteBoard(id);
  // DB.deleteTasksByBoardId(id);
  // if (!board) {
  //   throw new Error(`The board with id: ${id} has not been found`);
  // }
  // return board;
};

module.exports = { getAll, getById, create, update, deleteById };
