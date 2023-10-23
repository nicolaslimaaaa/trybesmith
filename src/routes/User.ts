import { Router } from 'express';
import UserController from '../controller/User';
import validateInputsUser from '../middlewares/validateInputsUser';
import authMiddleware from '../middlewares/authMiddleware';

const userRouter = Router();

userRouter.post(
  '/',
  validateInputsUser,
  authMiddleware,
  UserController.login,
);

export default userRouter;