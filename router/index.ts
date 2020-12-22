import { Router } from 'express';

const router = Router();

router.get('/', (_req, res) => {
  console.log('Arrived at route');
  try {
    res.status(200).send({
      message: 'Hello, from typescript express project',
    });
  } catch (error) {
    res.status(403);
  }
})

export default router;
