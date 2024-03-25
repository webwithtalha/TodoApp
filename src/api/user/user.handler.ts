import { Request, Response, NextFunction } from 'express';
import { User, Users, UserWithId } from './user.model';

export async function findAllusers(
  req: Request,
  res: Response<User[]>,
  next: NextFunction,
) {
  try {
    const result = await Users.find();
    const users = await result.toArray();
    res.json(users);
  } catch (error) {
    next(error);
  }
}

export async function createUsers(
  req: Request<{}, UserWithId, User>,
  res: Response<UserWithId>,
  next: NextFunction,
) {
  try {
    const validateResult = await User.parseAsync(req.body);
    const insertResult = await Users.insertOne(validateResult);
    if (!insertResult.acknowledged) throw new Error('Error inserting todo.');
    res.status(201);
    res.json({
      _id: insertResult.insertedId,
      ...validateResult,
    });
  } catch (error) {
    next(error);
  }
}
