import Habit from '../models/habitModel';

export const getAllHabits = async (req, res) => {
  try {
    const habits = await Habit.find();

    res.status(200).json({
      status: 'success',
      data: habits,
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: err instanceof Error ? err.message : 'An unknown error occurred',
    });
  }
};

export const createHabit = async (req, res) => {
  try {
    const habits = await Habit.create(req.body);

    res.status(201).json({
      status: 'success',
      data: habits,
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: err instanceof Error ? err.message : 'An unknown error occurred',
    });
  }
};
