import express from 'express';

import * as habitController from './../controllers/habitController';
import * as authController from './../controllers/authController';

const habitRouter = express.Router({ mergeParams: true });

// habitRouter.route('/signup').post(authController.signup);
// habitRouter.route('/login').post(authController.login);
// habitRouter.route('/logout').get(authController.logout);

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
  .patch(habitController.updateHabit)
  .delete(habitController.deleteHabit);

export default habitRouter;
