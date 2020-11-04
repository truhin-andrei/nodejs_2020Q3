const express = require('express');
const swaggerUI = require('swagger-ui-express');
const path = require('path');
const YAML = require('yamljs');

const morgan = require('./logger/morganConfig');
const logger = require('./logger/logger');
const errorHandler = require('./common/errorHandler');
const userRouter = require('./resources/users/user.router');
const boardRouter = require('./resources/boards/board.router');
const taskRouter = require('./resources/tasks/task.router');
const loginRouter = require('./login/login.Router');
const auth = require('./login/login.Auth');

const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.use(express.json());

app.use(morgan);

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/login', loginRouter);

app.use(auth);

app.use('/users', userRouter);

app.use('/boards', boardRouter);

app.use('/boards/:boardId/tasks', taskRouter);

app.use(errorHandler);

process.on('uncaughtException', error => {
  logger.error(`UncaughtException: ${error.message}`);
  process.exitCode = 1;
});

process.on('unhandledRejection', error => {
  logger.error(`unhandledRejection: ${error.message}`);
  process.exitCode = 1;
});

// throw Error('Oops!');
// Promise.reject(Error('Oops!'))

module.exports = app;
