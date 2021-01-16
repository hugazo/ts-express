require('module-alias/register');

// Import dotenv config
import dotenv from 'dotenv';

// Generate express app
import express from 'express';

// DB Import
import mongoose from 'mongoose';

// Middleware Mounting
import loggerMiddleware from './middleware/logger';

import baseRouter from './router';

// Server Declaration
dotenv.config();
const app = express();
app.use(express.json());

app.use(loggerMiddleware);
app.use(baseRouter);

const { PORT = '' } = process.env;

const startServer = () => {
  app.listen(PORT, () => {
    const port: string = PORT;
    // eslint-disable-next-line no-console
    console.log(`App listening in port ${port}`);
  });
};

// DB Setup

const {
  DB_USER = '',
  DB_SERVER = '',
  DB_PASSWORD = '',
  DB_NAME = '',
} = process.env;

const dbUrl = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_SERVER}/${DB_NAME}?retryWrites=true&w=majority`;

// eslint-disable-next-line no-void
void mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.once('open', () => {
  // eslint-disable-next-line no-console
  console.log('DB Connected, Starting Server');
  startServer();
});
