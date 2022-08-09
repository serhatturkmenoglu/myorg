
import * as express from 'express';

const app = express();

app.get('/api', (req, res) => {
  console.log("/api2");
  res.send({ message: 'Welcome to   api2!' });
});


const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);

