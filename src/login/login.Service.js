const jwt = require('jsonwebtoken');
const { JWT_SECRET_KEY } = require('../common/config');

const { validatePassword } = require('../common/passwordHasher');
const usersRepo = require('../resources/users/user.db.repository');

const signToken = async (login, password) => {
  const user = await usersRepo.getByProp({ login });
  if (!user) {
    return null;
  }

  const comparisonPassword = await validatePassword(password, user.password);

  if (comparisonPassword) {
    const { id: userId } = user;
    const token = jwt.sign({ userId, login }, JWT_SECRET_KEY, {
      expiresIn: '1h'
    });
    return token;
  }

  return null;
};

module.exports = {
  signToken
};
