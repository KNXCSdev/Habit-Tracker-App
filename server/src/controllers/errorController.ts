import { Request, Response, NextFunction } from 'express';
import AppError from '../utils/appError.js';

interface ErrorWithStatus extends Error {
  statusCode?: number;
  status?: string;
  isOperational?: boolean;
  name: string;
  code?: number;
  errmsg?: string;
  errors?: Record<string, { message: string }>;
  path?: string;
  value?: string;
}

const sendErrorDev = (err: ErrorWithStatus, req: Request, res: Response) => {
  if (req.originalUrl.startsWith('/api')) {
    return res.status(err.statusCode ?? 500).json({
      status: err.status,
      error: err,
      message: err.message,
      stack: err.stack,
    });
  }

  return res.status(err.statusCode ?? 500).render('error', {
    title: 'Something went wrong',
    msg: err.message,
  });
};

const sendErrorProd = (err: ErrorWithStatus, req: Request, res: Response) => {
  if (req.originalUrl.startsWith('/api')) {
    if (err.isOperational) {
      return res.status(err.statusCode ?? 500).json({
        status: err.status,
        message: err.message,
      });
    }

    console.error('ERROR 💥', err);

    return res.status(500).json({
      status: 'error',
      message: err.message,
    });
  }

  return res.status(err.statusCode ?? 500).render('error', {
    title: 'Something went wrong',
    msg: 'Please try again later',
  });
};

const handleCastErrorDB = (err: ErrorWithStatus) => {
  const message = `Invalid ${err.path}: ${err.value}`;
  return new AppError(message, 400);
};

const handleDuplicateFieldsDB = (err: ErrorWithStatus) => {
  // Extract duplicated value from errmsg string (may vary per Mongo version)
  const valueMatch = err.errmsg?.match(/(["'])(\\?.)*?\1/);
  const value = valueMatch ? valueMatch[0] : '';
  const message = `Duplicate field value: ${value}. Please use another value!`;
  return new AppError(message, 400);
};

const handleValidationErrorDB = (err: ErrorWithStatus) => {
  const errors = err.errors
    ? Object.values(err.errors).map((e) => e.message)
    : ['Invalid input data'];
  const message = `Invalid input data. ${errors.join('. ')}`;
  return new AppError(message, 400);
};

const handleJWTError = () =>
  new AppError('Invalid token please try again!', 401);
const handleJWTExpiredError = () =>
  new AppError('Your token has expired. Please log in again!', 401);

export default (
  err: ErrorWithStatus,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  err.statusCode = err.statusCode ?? 500;
  err.status = err.status ?? 'error';

  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(err, req, res);
  } else if (process.env.NODE_ENV === 'production') {
    let error = Object.create(err);
    error.message = err.message;

    if (error.name === 'CastError') error = handleCastErrorDB(error);
    if (error.code === 11000) error = handleDuplicateFieldsDB(error);
    if (error.name === 'ValidationError')
      error = handleValidationErrorDB(error);
    if (error.name === 'JsonWebTokenError') error = handleJWTError();
    if (error.name === 'TokenExpiredError') error = handleJWTExpiredError();

    sendErrorProd(error, req, res);
  }
};
