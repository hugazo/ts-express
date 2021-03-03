import { Router } from 'express';

const router = Router();

import UserController from '@controllers/user/create';
import FindUserController from '@controllers/user/find';

router.post('/', UserController);
router.get('/:email', FindUserController);

export default router;
