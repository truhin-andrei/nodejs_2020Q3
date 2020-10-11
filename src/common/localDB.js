const User = require('../resources/users/user.model');
const Board = require('../resources/boards/board.model');
const Task = require('../resources/tasks/task.model');

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

const createBoard = async board => {
  DB.boards.push(board);
  return board;
};

const updateBoard = async (id, updatedBoard) => {
  const currentBoard = DB.boards.filter(el => el.id === id)[0];
  if (!currentBoard) {
    return false;
  }
  DB.boards = DB.boards.map(el => {
    if (el.id === id) {
      return updatedBoard;
    }
    return el;
  });
  return updatedBoard;
};

const deleteBoard = async id => {
  if (!DB.boards.filter(el => el.id !== id)[0]) {
    return false;
  }
  DB.boards = DB.boards.filter(el => el.id !== id);
  return DB.boards.filter(el => el.id !== id)[0];
};

// Tasks DB

DB.tasks.push(new Task(), new Task(), new Task(), new Task());

const getAllTasksByBoardId = async () => {
  return [...DB.tasks];
};

const getTask = async id => DB.tasks.filter(el => el.id === id)[0];

const createTask = async task => {
  DB.tasks.push(task);
  return task;
};

const updateTask = async (id, updatedTask) => {
  const currentTask = DB.tasks.filter(el => el.id === id)[0];
  if (!currentTask) {
    return false;
  }
  DB.tasks = DB.tasks.map(el => {
    if (el.id === id) {
      return updatedTask;
    }
    return el;
  });
  return updatedTask;
};

// const deleteBoard = async id => {
//   if (!DB.boards.filter(el => el.id !== id)[0]) {
//     return false;
//   }
//   DB.boards = DB.boards.filter(el => el.id !== id);
//   return DB.boards.filter(el => el.id !== id)[0];
// };

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  getAllBoards,
  getBoard,
  createBoard,
  updateBoard,
  deleteBoard,
  getAllTasksByBoardId,
  getTask,
  createTask,
  updateTask
};
