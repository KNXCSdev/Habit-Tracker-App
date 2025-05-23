import { NextFunction, Request, Response } from 'express';
import Habit from '../models/habitModel';
import { catchAsync } from '../utils/catchAsync';
import AppError from '../utils/appError';

export const getAllHabits = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const habits = await Habit.find();

    if (!habits) {
      return next(
        new AppError('Something went wrong with getting all of the habits', 404)
      );
    }

    res.status(200).json({
      status: 'success',
      data: habits,
    });
  }
);

export const createHabit = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const habit = await Habit.create(req.body);

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
