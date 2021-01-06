const {
  DATABASE_NAME, DATABASE_PASSWORD, DATABASE_PORT, DATABASE_USERNAME,
} = require('./env');

module.exports = {
  development: {
    username: DATABASE_USERNAME,
    password: DATABASE_PASSWORD,
    database: DATABASE_NAME,
    host: '127.0.0.1',
    port: DATABASE_PORT,
    dialect: 'mysql',
  },
};
