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
     await queryInterface.bulkInsert('roles', [
      {
        id:'Business',
        role_name: 'Business',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'Super Admin',
        role_name: 'Super Admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'Shopper',
        role_name: 'Shopper',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'Influencer',
        role_name: 'Influencer',
        createdAt: new Date(),
        updatedAt: new Date()
      }

    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
