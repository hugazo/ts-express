import { Request, Response } from 'express';

const loggerMiddleware = (req: Request, _res: Response, next: Function) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

export default loggerMiddleware;
