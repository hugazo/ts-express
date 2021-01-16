import { Router } from 'express';

const router = Router();

import UserController from '@controllers/user/create';

router.post('/', UserController);

export default router;
