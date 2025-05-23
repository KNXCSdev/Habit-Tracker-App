import express from 'express';

import * as habitController from './../controllers/habitController';

const habitRouter = express.Router();

// habitRouter.route('/signup').post(authController.signup);
// habitRouter.route('/login').post(authController.login);
// habitRouter.route('/logout').get(authController.logout);

habitRouter
  .route('/')
  .get(habitController.getAllHabits)
  .post(habitController.createHabit);

// habitRouter
//   .route('/:id')
//   .get(userController.getUser)
//   .delete(userController.deleteUser)
//   .patch(userController.updateUser);

export default habitRouter;
