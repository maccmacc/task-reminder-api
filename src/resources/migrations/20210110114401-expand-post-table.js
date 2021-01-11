module.exports = {
  up: async (queryInterface, Sequelize) => Promise.all([queryInterface.addColumn(
    'Posts',
    'userId',
    {
      type: Sequelize.INTEGER,
      references: {
        model: 'users',
        key: 'id',
        as: 'userId',
      },
    },

  )]),

  down: async (queryInterface) => Promise.all([queryInterface.removeColumn('Posts', 'userId')]),

};
