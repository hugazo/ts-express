import { Request, Response, NextFunction, } from 'express';

import User, { IUser } from '@models/user';

const UserController = async (
  req: Request,
  res: Response,
  next: NextFunction,
):Promise<void> => {
  try {
    const newUser:IUser = new User(req.body);
    await newUser.save();
    res.status(200).send(newUser);
  } catch (e) {
    next(e);
  }
};

export default UserController;
