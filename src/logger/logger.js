const winston = require('winston');
const path = require('path');

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      level: 'debug',
      format: winston.format.cli()
    }),
    new winston.transports.File({
      filename: path.join(__dirname, './logs/errors.log'),
      handleExceptions: false,
      level: 'error',
      colorize: true,
      format: winston.format.simple()
    }),
    new winston.transports.File({
      filename: path.join(__dirname, './logs/info.log'),
      level: 'info',
      colorize: true,
      format: winston.format.simple()
    })
  ],
  exceptionHandlers: [
    new winston.transports.File({
      filename: path.join(__dirname, './logs/exceptions.log'),
      format: winston.format.combine(
        winston.format.json(),
        winston.format.colorize()
      )
    })
  ],
  exitOnError: true
});

logger.stream = {
  // eslint-disable-next-line no-unused-vars
  write(message, encoding) {
    logger.info(message);
  }
};

module.exports = logger;
