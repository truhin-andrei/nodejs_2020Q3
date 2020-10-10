const DB = require('../../common/localDB');

const getAll = async () => {
  // TODO: mock implementation. should be replaced during task development
  return DB.users;
};

const get = async id => {
  return DB.users.filter(el => el.id === id)[0];
};

module.exports = { getAll, get };
