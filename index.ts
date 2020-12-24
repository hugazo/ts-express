// Import dotenv config
import dotenv from 'dotenv';

// Generate express app
import express from 'express';

// Middleware Mounting
import loggerMiddleware from './middleware/logger';

import baseRouter from './router';

dotenv.config();
const app = express();
app.use(loggerMiddleware);
app.use(baseRouter);

const { PORT } = process.env;
app.listen(PORT, () => {
  const port: string = PORT || '';
  // eslint-disable-next-line no-console
  console.log(`App listening in port ${port}`);
});
