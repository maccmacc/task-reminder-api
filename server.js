const express = require('express');
const bodyParser = require('body-parser');

const { APP_PORT, SERVICE_NAME } = require('./src/config/env');
const usersRoute = require('./src/entities/user');

const app = express();

app.use(bodyParser.json());

app.get('/', ((req, res) => {
  res.send('Hello world');
}));

app.use('/users', usersRoute);

app.listen(APP_PORT, () => {
  console.log(`${SERVICE_NAME} is up!`);
});
