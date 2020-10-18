const winston = require('winston');
const path = require('path');

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      level: 'debug',
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.cli()
      )
    }),
    new winston.transports.File({
      filename: path.join(__dirname, './logs/errors.log'),
      handleExceptions: true,
      level: 'error',
      format: winston.format.json(),
      colorize: false
    }),
    new winston.transports.File({
      filename: path.join(__dirname, './logs/info.log'),
      level: 'info',
      json: true,
      colorize: false
    })
  ],
  exceptionHandlers: [
    new winston.transports.File({
      filename: path.join(__dirname, './logs/exceptions.log'),
      format: winston.format.combine(
        winston.format.uncolorize(),
        winston.format.json()
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
