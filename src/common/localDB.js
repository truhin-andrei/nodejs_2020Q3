const User = require('../resources/users/user.model');
const Board = require('../resources/boards/board.model');

const DB = {
  users: [],
  boards: [],
  tasks: []
};
// Users DB

DB.users.push(new User(), new User(), new User(), new User());

const getAllUsers = async () => {
  return [...DB.users];
};

const getUser = async id => DB.users.filter(el => el.id === id)[0];

const createUser = async user => {
  DB.users.push(user);
  return user;
};

const updateUser = async (id, updatedUser) => {
  const currentUser = DB.users.filter(el => el.id === id)[0];
  if (!currentUser) {
    return false;
  }
  DB.users = DB.users.map(el => {
    if (el.id === id) {
      return updatedUser;
    }
    return el;
  });
  return updatedUser;
};

const deleteUser = async id => {
  if (!DB.users.filter(el => el.id !== id)[0]) {
    return false;
  }
  DB.users = DB.users.filter(el => el.id !== id);
  return DB.users.filter(el => el.id !== id)[0];
};

// Boards DB

DB.boards.push(new Board(), new Board(), new Board(), new Board());

const getAllBoards = async () => {
  return [...DB.boards];
};

const getBoard = async id => DB.boards.filter(el => el.id === id)[0];

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  getAllBoards,
  getBoard
};
