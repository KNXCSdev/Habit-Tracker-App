import { NextFunction, Request, Response } from 'express';
import User from '../models/userModel.js';
import { catchAsync } from '../utils/catchAsync.js';
import AppError from '../utils/appError.js';
import { Types } from 'mongoose';

export const getAllUsers = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const users = await User.find();

    res.status(200).json({
      status: 'success',
      data: users,
    });
  }
);

export const getUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = await User.findById(req.params.id);

    if (!user) {
      return next(new AppError('User with specified ID does not exist!', 404));
    }

    res.status(200).json({
      status: 'success',
      data: user,
    });
  }
);

export const getCurrentUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = await User.findOne(req.user);

    if (!user) {
      return next(new AppError('Something went really wrong!', 404));
    }

    res.status(200).json({
      status: 'success',
      data: user,
    });
  }
);

export const updateOne = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!user) {
      return next(new AppError('User not found with that ID', 404));
    }

    res.status(200).json({
      status: 'success',
      data: user,
    });
  }
);

const filterObj = (obj: Record<string, string>, ...allowedFields: string[]) => {
  const newObj: Record<string, any> = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};

interface AuthenticatedRequest extends Request {
  user: {
    id: Types.ObjectId;
  };
}

export const getMe = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  req.params.id = req.user.id.toString();

  next();
};

export const updateMe = catchAsync(
  async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    // 1) Create error if user POSTs password data

    if (req.body.password || req.body.passwordConfirm) {
      return next(
        new AppError(
          'This route is not for password updates. Please use /updateMyPassword.',
          400
        )
      );
    }

    // 2) Filtered out unwanted fields names that are not allowed to be updated
    // ADD THE PHOTO TO AN OBJECT IF USER UPLOADED IT
    const filteredBody = filterObj(req.body, 'name', 'email');

    // 3) Update user document
    const updatedUser = await User.findByIdAndUpdate(
      req.user.id,
      filteredBody,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      status: 'success',
      data: {
        user: updatedUser,
      },
    });
  }
);

export const deleteUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    await User.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: 'success',
      data: null,
    });
  }
);
