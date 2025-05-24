import { NextFunction, Request, Response } from 'express';
import Habit from '../models/habitModel.js';
import { catchAsync } from '../utils/catchAsync.js';
import AppError from '../utils/appError.js';

export const getAllHabits = catchAsync(
  async (req: any, res: Response, next: NextFunction) => {
    let filter: Record<string, any> = {};

    // If logged-in user is not admin, limit to their own habits
    if (req.user.role !== 'admin') {
      filter = { user: req.user.id };
    }

    // If nested route: /users/:userId/habits — validate and limit access
    if (req.params.userId) {
      if (req.user.role !== 'admin' && req.user.id !== req.params.userId) {
        return next(
          new AppError('You do not have permission to view these habits.', 403)
        );
      }
      filter = { user: req.params.userId };
    }

    let query = Habit.find(filter);

    // Only populate if admin (or you want richer data)
    if (req.user.role === 'admin') {
      query = query.populate({
        path: 'user',
        select: '-__v -passwordChangedAt',
      });
    } else {
      query = query.select('-user');
    }

    const habits = await query;

    res.status(200).json({
      status: 'success',
      results: habits.length,
      data: habits,
    });
  }
);

export const getHabit = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const habit = await Habit.findById(req.params.id);

    if (!habit) {
      return next(
        new AppError('Something went wrong with getting the habit', 404)
      );
    }

    res.status(200).json({
      status: 'success',
      data: habit,
    });
  }
);

export const createHabit = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const habit = await Habit.create({ ...req.body, user: req.user.id });

    if (!habit) {
      return next(
        new AppError('Something went wrong with creating a habit', 404)
      );
    }

    res.status(201).json({
      status: 'success',
      data: habit,
    });
  }
);

export const updateHabit = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const habit = await Habit.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!habit) {
      return next(
        new AppError('Something went wrong with updating a habit', 404)
      );
    }

    res.status(200).json({
      status: 'success',
      data: habit,
    });
  }
);

export const deleteHabit = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    await Habit.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: 'success',
      data: null,
    });
  }
);
