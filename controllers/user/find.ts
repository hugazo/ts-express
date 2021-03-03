import { Request, Response, NextFunction } from 'express';

import User, { IUser } from '@models/user';

const FindUserController = async (
  req: Request,
  res: Response,
  next: NextFunction,
):Promise<void> => {
  try {
    const { email } = req.params;
    const user: IUser | null = await User.findOne({ email });
    res.status(200).send(user);
  } catch (e) {
    next(e);
  }
};

export default FindUserController;
