const express = require('express');
const bodyParser = require('body-parser');

const { APP_PORT, SERVICE_NAME } = require('./src/config/env');
const usersRoute = require('./src/routes/users.routes');

const db = require('./src/entities/index');

db.sequelize.authenticate()
  .then(() => {
    console.log('Connected to database!');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

const app = express();

app.use(bodyParser.json());

app.get('/', ((req, res) => {
  res.send('Hello world');
}));

app.use('/users', usersRoute);

app.listen(APP_PORT, () => {
  console.log(`${SERVICE_NAME} is up!`);
});
