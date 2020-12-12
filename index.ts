import dotenv from 'dotenv';

dotenv.config();

import express, {Request, Response} from 'express';

const app = express();

const { PORT } = process.env;

app.get('/', (_req: Request, res: Response) => res.send('App working!'));

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
