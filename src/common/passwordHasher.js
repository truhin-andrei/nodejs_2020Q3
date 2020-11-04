const bcrypt = require('bcrypt');

const hashPassword = async password => {
  const hash = await bcrypt.hash(password, 10);
  return hash;
};

const validatePassword = async (password, hash) => {
  await bcrypt.validatePassword(password, hash);
};

module.exports = {
  hashPassword,
  validatePassword
};
