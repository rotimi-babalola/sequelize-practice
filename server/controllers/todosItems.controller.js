import { TodoItem } from '../models';

export default {
  create(request, response) {
    return TodoItem.create({
      content: request.body.content,
      todoId: request.params.todoId,
    }).then(todoItem => response.status(201).send(todoItem))
      .catch(error => response.status(500).send(error));
  },
};
