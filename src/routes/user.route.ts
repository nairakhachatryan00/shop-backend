import { Router } from 'express';
import { userController } from "../api/user.controller";

const userRouter = Router();

userRouter.get('/', userController.getAll);
userRouter.post('/:userId', userController.create);
userRouter.get('/:id', userController.getById);
userRouter.patch('/:id', userController.update);
userRouter.delete('/:id', userController.delete);

module.exports = userRouter
