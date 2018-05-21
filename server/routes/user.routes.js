import express from 'express';
import userController from '../controllers/user.controller';

const router = express.Router();

router.route('/')
  .post(userController.createUser);

router.route('/signin')
  .post(userController.signin);

export default router;
