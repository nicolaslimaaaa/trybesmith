import { Router } from 'express';
import UserController from '../controller/User';
// import validateInputsUser from '../middlewares/validateInputsUser';

const userRouter = Router();

userRouter.post('/', UserController.login);

export default userRouter;