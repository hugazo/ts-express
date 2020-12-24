import { Request, Response, NextFunction } from 'express';

const loggerMiddleware = (
  req: Request,
  _res: Response,
  next: NextFunction,
): void => {
  try {
    // eslint-disable-next-line no-console
    console.log(`${req.method} ${req.url}`);
    next();
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};

export default loggerMiddleware;
