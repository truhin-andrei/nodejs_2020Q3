const logger = require('../logger/logger');

const errorHandler = (err, req, res, next) => {
  logger.error(`${err.status || 500} - ${err.message}`);
  res.status(err.status || 500).send(err.message || 'Here are some Error');
  next(err);
};

module.exports = errorHandler;
