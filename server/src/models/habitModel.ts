import mongoose from 'mongoose';
import calculateWeeklyProgress from '../utils/calculateWeeklyProgress.js';

const habitSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    default: 'CheckCircleIcon',
  },
  frequency: {
    type: String,
    enum: ['daily', 'weekly', 'monthly'],
    required: [true, 'The frequency can only be daily, weekly or monthly'],
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
  highestStreak: { type: Number, default: 0 },
});

// habitSchema.pre(/^find/, function (next) {
//   (this as mongoose.Query<any, any>).populate({
//     path: 'user',
//     select: '-__v -passwordChangedAt',
//   });

//   next();
// });

habitSchema.pre('save', function (next) {
  if (!this.isModified('completedDates')) return next();

  const dateStrings = [...this.completedDates]
    .map((d: any) => new Date(d as Date | string).toISOString().split('T')[0])
    .sort();

  let currentStreak = 1;
  let maxStreak = 1;

  for (let i = dateStrings.length - 1; i > 0; i--) {
    const current = new Date(dateStrings[i]);
    const prev = new Date(dateStrings[i - 1]);

    const diff = (current.getTime() - prev.getTime()) / (1000 * 60 * 60 * 24);

    if (diff === 1) {
      currentStreak++;
      if (currentStreak > maxStreak) {
        maxStreak = currentStreak;
      }
    } else {
      currentStreak = 1;
    }
  }

  this.streak = currentStreak;
  this.highestStreak = maxStreak;
  next();
});

const Habit = mongoose.model('Habit', habitSchema);

export default Habit;
