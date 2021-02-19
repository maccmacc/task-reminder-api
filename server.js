const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { APP_PORT, SERVICE_NAME } = require('./src/config/env');
const usersRoute = require('./src/routes/users.routes');
const userPostsRoute = require('./src/routes/user-posts.routes');
const postsRoute = require('./src/routes/posts.routes');
const db = require('./src/entities/index');

db.sequelize.authenticate()
  .then(() => {
    console.log('Connected to database!');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', ((req, res) => {
  res.send('Hello world');
}));

app.use('/users', usersRoute);
app.use('/users', userPostsRoute);
app.use('/posts', postsRoute);

app.listen(APP_PORT, () => {
  console.log(`${SERVICE_NAME} is up!`);
});
