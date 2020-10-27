const schema = require('./schema');
const logger = require('../logger/logger');

const validator = (name, key) => {
  console.log(64665);
  return (req, res, next) => {
    console.log(req[key]);
    if (!schema.validate(req[key])) {
      logger.error('your data is not correct');
      res.status(400).json({ error: `${name} is not correct` });
    } else {
      // eslint-disable-next-line callback-return
      next();
    }
  };
};

module.exports = validator;
