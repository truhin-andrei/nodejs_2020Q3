const morgan = require('morgan');
const logger = require('./logger');

morgan.token('query', req => {
  return `query: ${JSON.stringify(req.query)}`;
});
morgan.token('params', req => {
  return `params: ${JSON.stringify(req.params)}`;
});
morgan.token('body', req => {
  return `body: ${JSON.stringify(req.body)}`;
});

module.exports = morgan(
  '[:date[web]] :method :url :status :query :params :body - :response-time ms',
  {
    stream: logger.stream
  }
);
