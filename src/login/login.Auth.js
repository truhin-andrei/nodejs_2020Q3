const jwt = require('jsonwebtoken');
const { JWT_SECRET_KEY } = require('../common/config');

module.exports = (req, res, next) => {
  const authHeader = req.header('Authorization');
  if (authHeader !== undefined) {
    const [type, token] = authHeader.split(' ');
    if (type !== 'Bearer') {
      res.status(401).send('Unauthorized');
    } else {
      res = jwt.verify(token, JWT_SECRET_KEY);
      return next();
    }
  }

  res.status(401).send('Unauthorized');
};
