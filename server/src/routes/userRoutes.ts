import express from 'express';

import * as userController from './../controllers/userController';

const userRouter = express.Router();

// userRouter.route('/signup').post(authController.signup);
// userRouter.route('/login').post(authController.login);
// userRouter.route('/logout').get(authController.logout);

userRouter.route('/').get(userController.getAllUsers);

// userRouter
//   .route('/:id')
//   .get(userController.getUser)
//   .delete(userController.deleteUser)
//   .patch(userController.updateUser);

export default userRouter;
