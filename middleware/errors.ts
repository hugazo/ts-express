import {
  Request,
  Response,
  NextFunction,
} from 'express';

const errorHandlerMiddleware = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
): void => {
  try {
    console.log('Error Catched in ErrorHandler', err);
    const { message } = err || 'nomessage';
    res.status(500).send({
      error: message,
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};

export default errorHandlerMiddleware;
