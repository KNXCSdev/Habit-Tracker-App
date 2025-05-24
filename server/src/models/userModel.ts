import mongoose from 'mongoose';
import isEmail from 'validator/lib/isEmail.js';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Please tell us your name'] },
  email: {
    type: String,
    required: [true, 'Please provide us your email'],
    unique: true,
    lowercase: true,
    validate: [isEmail, 'Please provide a valid email'],
  },
  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user',
  },
  password: {
    type: String,
    required: [true, 'Please provide us your password'],
    minLength: 8,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please confirm your password'],
    validate: {
      // This only works on save
      validator: function (
        this: mongoose.Document & { password: string },
        val: string
      ) {
        return val === this.password;
      },
      message: 'Passwords are not the same!',
    },
  },
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  this.password = await bcrypt.hash(this.password, 12);

  // @ts-ignore DONT CARE THIS SHIT WOULD HAVE A PROBLEM AND IM NOT GONNA WASTE MY TIME
  this.passwordConfirm = undefined;

  next();
});

userSchema.methods.correctPassword = async function (
  candidatePassword: string,
  userPassword: string
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const User = mongoose.model('User', userSchema);

export default User;
