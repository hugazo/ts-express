import dotenv from 'dotenv';

dotenv.config();

import express, {Request, Response} from 'express';

const app = express();

const { PORT } = process.env;

import baseRouter from './router';

app.use(baseRouter);

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
