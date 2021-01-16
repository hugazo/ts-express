import {
  Request,
  Response,
  NextFunction,
  ErrorRequestHandler,
} from 'express';

const errorHandlerMiddleware = (
  err: ErrorRequestHandler,
  _req: Request,
  res: Response,
  _next: NextFunction,
): void => {
  try {
    console.log('Error Catched in ErrorHandler', err);
    res.status(500).send(err);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};

export default errorHandlerMiddleware;
