'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('Airports',{
      fields:['cityID'],
      type:'foreign key',
      name:'custom_fkey_constraint_name',
      references:{
        table:'Cities',
        field:'id'
      },
      onDelete: 'cascade'
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Airports','custom_fkey_constraint_name')
  }
};
