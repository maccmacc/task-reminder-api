module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.addColumn('Posts', 'userId', {
    type: Sequelize.INTEGER,
  }).then(() => queryInterface.addConstraint(
    'Posts',
    {
      fields: ['userId'],
      type: 'foreign key',
      name: 'fk_user',
      references: {
        table: 'users',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    },
  )),

  down: async (queryInterface) => Promise.all([queryInterface.removeConstraint('Posts', 'fk_user'), queryInterface.removeColumn('Posts', 'userId')]),

};
