import express from 'express';

import * as userController from './../controllers/userController';
import * as authController from './../controllers/authController';

const userRouter = express.Router();

userRouter.route('/signup').post(authController.signup);
// userRouter.route('/login').post(authController.login);
// userRouter.route('/logout').get(authController.logout);

userRouter
  .route('/')
  .get(
    authController.protect,
    authController.restrictTo(['admin']),
    userController.getAllUsers
  );

// userRouter
//   .route('/:id')
//   .get(userController.getUser)
//   .delete(userController.deleteUser)
//   .patch(userController.updateUser);

export default userRouter;
