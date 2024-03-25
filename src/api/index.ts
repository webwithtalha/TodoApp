import express from 'express';

import MessageResponse from '../interfaces/MessageResponse';
import user from './user/user.routes';

const router = express.Router();

router.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.use('/users', user);

export default router;
