import { Router, Request, Response } from 'express';
import User from './user.model';

const router = Router();

router.get('/', (req: Request, res: Response<User[]>) => {
  res.json([
    {
      id: '123',
      email: 'talha@gmail.com',
      name: 'Talha',
      password: '12345666',
    },
  ]);
});

export default router;
