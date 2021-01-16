import { Router, Request, Response } from 'express';

import userRouter from './user/index';

const router = Router();

router.use('/user', userRouter);

router.get('/', (_req: Request, res: Response) => {
  try {
    res.status(200).send({
      message: 'Hello, from typescript express project',
    });
  } catch (error) {
    res.status(403);
  }
});

export default router;
