import { Router } from 'express';
import * as UserHandler from './user.handler';

const router = Router();

router.get('/', UserHandler.findAllusers);
router.post('/', UserHandler.createUsers);

export default router;
