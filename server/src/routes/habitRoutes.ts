import express from 'express';

import * as habitController from './../controllers/habitController.js';
import * as authController from './../controllers/authController.js';

const habitRouter = express.Router({ mergeParams: true });

habitRouter.use(authController.protect);

habitRouter
  .route('/')
  .get(
    authController.restrictTo(['admin', 'user']),
    habitController.getAllHabits
  )
  .post(habitController.createHabit);

habitRouter.route('/:id/complete').patch(habitController.completeHabit);

habitRouter
  .route('/:id')
  .get(habitController.getHabit)
  .patch(habitController.updateHabit)
  .delete(habitController.deleteHabit);

export default habitRouter;
