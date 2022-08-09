import * as express from 'express';
import { addTodoRoutes } from './app/todos';

const app = express();

app.get('/api', (req, res) => {
  console.log('/api');
  console.log('/api');
  res.send({ message: 'Welcome to api!' });
});
addTodoRoutes(app);

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
