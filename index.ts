// Import dotenv config
import dotenv from 'dotenv';
dotenv.config();

// Generate express app
import express from 'express';
const app = express();

// Middleware Mounting
import loggerMiddleware from './middleware/logger';
app.use(loggerMiddleware);

import baseRouter from './router';
app.use(baseRouter);

const { PORT } = process.env;
app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
