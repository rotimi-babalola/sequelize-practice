import express from 'express';
import userController from '../controllers/user.controller';
import { checkPasswordLength } from '../middleware/validation';

const router = express.Router();

router.route('/')
  .post(checkPasswordLength, userController.createUser);

router.route('/signin')
  .post(userController.signin);

export default router;
