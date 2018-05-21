import { Todo } from '../models';

export default {
  createTodo(request, response) {
    const { title } = request.body;
    const userId = request.decoded.userId;
    return Todo.create({
      title,
      userId,
    }).then((todo) => response.status(201).send(todo))
      .catch(error => response.status(500).send(error));
  },
  list(request, response) {
    return Todo.findAll()
      .then(todos => response.status(200).send(todos))
      .catch(error => response.status(500).send(error));
  },
};
