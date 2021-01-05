const express = require('express');
const bodyParser = require('body-parser');

const { APP_PORT, SERVICE_NAME } = require('./src/config/env');

const app = express();

app.use(bodyParser.json());

app.get('/', ((req, res) => {
  res.send('Hello world');
}));

app.listen(APP_PORT, () => {
  console.log(`${SERVICE_NAME} is up!`);
});
