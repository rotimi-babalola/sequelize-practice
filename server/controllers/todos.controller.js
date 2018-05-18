import { Todo } from '../models';

export default {
  createTodo(request, response) {
    const { title } = request.body;
    return Todo.create({
      title,
    }).then((todo) => response.status(201).send(todo))
      .catch(error => response.status(500).send(error));
  },
};
