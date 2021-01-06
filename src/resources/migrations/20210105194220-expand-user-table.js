module.exports = {
  up: async (queryInterface, Sequelize) => Promise.all([queryInterface.addColumn(
    'Users', // table name
    'address', // new field name
    {
      type: Sequelize.STRING,
      allowNull: true,
    },
  )]),
  down: async (queryInterface) => Promise.all([queryInterface.removeColumn('Users', 'address')]),
};
