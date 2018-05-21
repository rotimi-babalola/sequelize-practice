import express from 'express';
import todoController from '../controllers/todos.controller';
import todoItemsController from '../controllers/todosItems.controller';
import { decodeToken } from '../middleware/validation';

const router = express.Router();

router.route('/')
  .get(decodeToken, todoController.list)
  .post(decodeToken, todoController.createTodo);

router.route('/:todoId/items')
  .post(decodeToken, todoItemsController.create);

export default router;
