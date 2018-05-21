import express from 'express';
import logger from 'morgan';

import todoRoutes from './server/routes/todo.routes';
import userRoutes from './server/routes/user.routes';

const app = express();

app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/todos', todoRoutes);
app.use('/api/users', userRoutes);

// Setup a default catch-all route that sends back a welcome message in JSON format.
app.all('*', (req, res) => res.status(200).send({
  message: 'Welcome to my API!!!',
}));

export default app;
