import { Router, Request, Response } from 'express';

const router = Router();

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
