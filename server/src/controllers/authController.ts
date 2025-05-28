import { NextFunction, Request, Response } from 'express';
import User from '../models/userModel.js';
import jwt from 'jsonwebtoken';
import { Types } from 'mongoose';
import AppError from '../utils/appError.js';
import { catchAsync } from '../utils/catchAsync.js';
import { promisify } from 'util';

const signToken = (id: string) => {
  // @ts-ignore
  return jwt.sign({ id }, process.env.JWT_SECRET!, {
    expiresIn: process.env.JWT_EXPIRES_IN!,
  });
};

interface IUser {
  _id: Types.ObjectId;
  name: string;
  email: string;
  password?: string;
  passwordConfirm?: string;
  role: string;
  correctPassword?: (
    candidatePassword: string,
    userPassword: string
  ) => Promise<boolean>;
}

const createSendToken = (
  user: IUser,
  statusCode: number,
  req: Request,
  res: Response
) => {
  const token: string = signToken(user._id.toString());
  const cookieOptions = {
    expires: new Date(
      Date.now() +
        Number(process.env.JWT_COOKIE_EXPIRES_IN) * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'none' as 'none',
  };

  res.cookie('jwt', token, cookieOptions);

  // Remove password from output
  user.password = undefined;

  res.status(statusCode).json({
    status: 'success',
    token,
    data: {
      user,
    },
  });
};

export const signup = catchAsync(async (req, res, next) => {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
    role: req.body.role,
  });

  createSendToken(newUser, 201, req, res);
});

export const logout = (req: Request, res: Response) => {
  res.cookie('jwt', 'loggedout', {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
    sameSite: 'none',
    secure: true,
  });
  res.status(200).json({ status: 'success' });
};

export const login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new AppError('Please provide email and password!', 400));
  }
  const user = await User.findOne({ email }).select('+password');

  if (
    !user ||
    !(await (user as IUser).correctPassword?.(password, user.password))
  ) {
    return next(new AppError('Incorrect email or password', 401));
  }
  createSendToken(user, 200, req, res);
});

export const protect = catchAsync(
  async (req: any, res: Response, next: NextFunction) => {
    let token: string | undefined;

    // 1) Get token from headers or cookies
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      token = req.headers.authorization.split(' ')[1];
    } else if (req.cookies?.jwt) {
      token = req.cookies.jwt;
    }

    if (!token || token === null) {
      return next(
        new AppError('You are not logged in! Please log in to get access!', 401)
      );
    }

    // 2) Verify token
    // @ts-ignore
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    // 3) Check if user still exists
    // @ts-ignore
    const freshUser = await User.findById(decoded.id);
    if (!freshUser) {
      return next(
        new AppError('The user belonging to this token no longer exists.', 401)
      );
    }

    // 4) Grant access
    req.user = freshUser;
    next();
  }
);

export const restrictTo = (roles: string[]) => {
  return (req: any, res: Response, next: NextFunction) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError('You do not have permission to perform this action.', 403)
      );
    }

    next();
  };
};
