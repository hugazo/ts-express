require('module-alias/register');

// Import dotenv config
import dotenv from 'dotenv';
// Generate express app
import express from 'express';
import listEndpoints from 'express-list-endpoints';
// DB Import
import mongoose from 'mongoose';
// Middleware Mounting
import errorHandlerMiddleware from '@middleware/errors';
import notFoundMiddleware from '@middleware/not-found';
import loggerMiddleware from './middleware/logger';

// Router Mounting
import baseRouter from './router';

// Server Declaration
dotenv.config();
const app = express();
// Base Middlewares
app.use(express.json());
// Pre Route Middleware
app.use(loggerMiddleware);
// Route Declaration
app.use(baseRouter);
// 404 error handler.
app.use(notFoundMiddleware);

app.use(errorHandlerMiddleware);

const { PORT = '' } = process.env;

const startServer = () => {
  app.listen(PORT, () => {
    const port: string = PORT;
    if (process.env.NODE_ENV === 'development') {
      console.log('|| App Routes ||');
      const endpoints = listEndpoints(app);
      endpoints.forEach((route) => {
        route.methods.forEach((method) => {
          console.log(`${method}\t${route.path}`);
        });
      });
    }
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
void mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const db = mongoose.connection;

db.once('open', () => {
  // eslint-disable-next-line no-console
  console.log('DB Connected, Starting Server');
  startServer();
});
