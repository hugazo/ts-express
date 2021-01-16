import { Request, Response } from 'express';

const notFoundMiddleware = (_req: Request, res: Response):void => {
  res.status(404).send({
    error: 'Route Not in API, please read the docs.',
  });
};

export default notFoundMiddleware;
