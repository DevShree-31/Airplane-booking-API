'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Airplanes', [{
      modelNumber: 'airbus 320',
      capacity:150,
      createdAt:new Date(),
      updatedAt:new Date()
    },
  {
    modelNumber: 'boeing 777',
      capacity:150,
      createdAt:new Date(),
      updatedAt:new Date()
  }], {})
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Airplanes', null, {});
  }
};
