import express from 'express';

import * as habitController from './../controllers/habitController';
import * as authController from './../controllers/authController';

const habitRouter = express.Router({ mergeParams: true });

habitRouter
  .route('/')
  .get(
    authController.protect,
    authController.restrictTo(['admin']),
    habitController.getAllHabits
  )
  .post(habitController.createHabit);

habitRouter
  .route('/:id')
  .get(authController.protect, habitController.getHabit)
  .patch(authController.protect, habitController.updateHabit)
  .delete(authController.protect, habitController.deleteHabit);

export default habitRouter;
