import express from 'express';
import todoController from '../controllers/todos';

const router = express.Router();

router.route('/')
  .post(todoController.createTodo);

export default router;
