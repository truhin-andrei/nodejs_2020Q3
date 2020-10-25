const { PORT } = require('./common/config');
const app = require('./app');
const connectToDB = require('./db/db.client');
const logger = require('./logger/logger');

connectToDB(() =>
  app.listen(PORT, () =>
    logger.info(`App is running on http://localhost:${PORT}`)
  )
);
