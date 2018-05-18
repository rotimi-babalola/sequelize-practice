import express from 'express';
import todoController from '../controllers/todos.controller';

const router = express.Router();

router.route('/')
  .post(todoController.createTodo);

export default router;
