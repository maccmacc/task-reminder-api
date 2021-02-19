// eslint-disable-next-line
'use strict';
const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Post.belongsTo(models.User, {
        foreignKey: {
          name: 'userId',
          allowNull: false,
        },
        onDelete: 'cascade',
        hooks: true,
        // targetKey: 'userId',
      });
    }
  }

  Post.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Post',
  });

  return Post;
};
