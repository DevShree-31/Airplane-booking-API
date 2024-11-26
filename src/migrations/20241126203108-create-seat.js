'use strict';
/** @type {import('sequelize-cli').Migration} */
const {ENUM}=require('../utils/common')
const {BUSINESS,ECONOMY,PREMIUM_ECONOMY,FIRST_CLASS}=ENUM.SEAT_TYPE
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Seats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      airplaneID: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'Airplanes',
          key:'id'
        },
        onDelete: 'cascade'
      },
      row: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      col: {
        type: Sequelize.STRING,
        allowNull:false
      },
      class: {
        type:Sequelize.ENUM,
      values:[BUSINESS,ECONOMY,PREMIUM_ECONOMY,FIRST_CLASS],
      defaultValue:ECONOMY,
      allowNull:false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Seats');
  }
};