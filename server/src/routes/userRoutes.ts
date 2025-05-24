import express from 'express';

import * as userController from './../controllers/userController';
import * as authController from './../controllers/authController';

const userRouter = express.Router({ mergeParams: true });

userRouter.route('/signup').post(authController.signup);
userRouter.route('/login').post(authController.login);

userRouter.use(authController.protect);

userRouter.route('/logout').get(authController.logout);

userRouter
  .route('/me')
  .get(userController.getMe, userController.getCurrentUser);

userRouter.route('/updateMe').patch(userController.updateMe);

userRouter.use(authController.restrictTo(['admin']));

userRouter.route('/').get(userController.getAllUsers);

userRouter
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateOne)
  .delete(userController.deleteUser);
//   .patch(userController.updateUser);

export default userRouter;
