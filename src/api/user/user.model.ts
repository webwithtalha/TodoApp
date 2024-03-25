import { WithId } from 'mongodb';
import * as z from 'zod';

import { db } from '../../db';

export const User = z.object({
  email: z.string().min(5).max(200),
  name: z.string().min(5).max(200),
  password: z.string().min(6).max(200),
});

export type User = z.infer<typeof User>;
export type UserWithId = WithId<User>;
export const Users = db.collection<User>('users');
