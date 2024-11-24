'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Flight', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      flightNumber: {
        type: Sequelize.STRING,
        allowNull:false
      },
      airplaneId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'Airplanes',
          key:'id'
        },
        onDelete: 'cascade'
      },
      departureCityId: {
        type: Sequelize.STRING,
        allowNull:false,
        references:{
          model:'Airports',
          key:'code'
        },
        onDelete: 'cascade'
      },
      arrivalCityId: {
        type: Sequelize.STRING,
        allowNull:false,
        references:{
          model:'Airports',
          key:'code'
        },
        onDelete: 'cascade'
      },
      arrivalTime: {
        type: Sequelize.DATE,
        allowNull:false
      },
      departureTime: {
        type: Sequelize.DATE,
        allowNull:false
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      boardingGate: {
        type: Sequelize.STRING
      },
      totalSeats: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('Flight');
  }
};