import mongoose from 'mongoose';
import calculateWeeklyProgress from '../utils/calculateWeeklyProgress';

const habitSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  frequency: {
    type: String,
    enum: ['daily', 'weekly'],
    required: [true, 'The frequency can only be daily or weekly'],
    default: 'daily',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  completedDates: {
    type: [Date],
    default: [],
  },
  streak: {
    type: Number,
    default: 0,
  },

  // Optional Weekly Fields
  weeklyGoal: {
    type: Number,
    default: null,
  },
  weeklyProgress: {
    type: Number,
    default: null,
  },
});

habitSchema.pre('save', function (next) {
  if (!this.isModified('completedDates')) return next();

  const dates = [...this.completedDates]
    .map((d) => new Date(d).toISOString().split('T')[0])
    .sort();

  let streak = 1;

  for (let i = dates.length - 1; i > 0; i--) {
    const current = new Date(dates[i]);
    const prev = new Date(dates[i - 1]);

    const diff = (current.getTime() - prev.getTime()) / (1000 * 60 * 60 * 24);

    if (diff === 1) {
      streak++;
    } else {
      break;
    }
  }

  this.streak = streak;
  next();
});

habitSchema.pre('save', function (next) {
  if (this.frequency === 'weekly') {
    const today = new Date();
    const progress = calculateWeeklyProgress(
      this.completedDates.map((d) => new Date(d).toISOString().split('T')[0]),
      today
    );
    this.weeklyProgress = progress;
  }

  next();
});

const Habit = mongoose.model('Habit', habitSchema);

export default Habit;
