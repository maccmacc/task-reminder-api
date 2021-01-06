const Sequelize = require('sequelize');
const {
  // eslint-disable-next-line max-len
  DATABASE_NAME, DATABASE_PASSWORD, DATABASE_PORT, DATABASE_USERNAME, DATABASE_HOST, DATABASE_DIALECT,
} = require('../config/db-config');

// eslint-disable-next-line max-len
const sequelize = new Sequelize(DATABASE_NAME, DATABASE_PORT, DATABASE_PASSWORD, DATABASE_USERNAME, {
  host: DATABASE_HOST,
  dialect: DATABASE_DIALECT,

});

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.User = require('./user')(sequelize, Sequelize);

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
module.exports = db;
