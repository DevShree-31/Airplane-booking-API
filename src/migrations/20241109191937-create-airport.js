'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Airports', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type:DataTypes.STRING,
      allowNull: false,
      unique: true
      },
      code: {
        type:DataTypes.STRING,
      allowNull:false,
      unique:true
      },
      address: {
        type:DataTypes.STRING,
      unique:true
      },
      cityID: {
        type:DataTypes.INTEGER,
        allowNull:false,
        unique:true
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
    await queryInterface.dropTable('Airports');
  }
};