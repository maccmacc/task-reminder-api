// eslint-disable-next-line
'use strict';
const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Post, {
        foreignKey: {
          name: 'userId',
          allowNull: true,
        },
        // sourceKey: 'userId',
        as: 'posts',
        onDelete: 'cascade',
        hooks: true,
      });
    }
  }
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    address: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'Novi Sad',
    },
  }, {
    sequelize,
    modelName: 'User',
  });

  return User;
};
