'use strict';

const { v4:uuidv4 } = require('uuid');

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

    //  await queryInterface.bulkInsert('roles', [
    //   {
    //     id:'Business',
    //     role_name: 'Business',
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   },
    //   {
    //     id: 'Super Admin',
    //     role_name: 'Super Admin',
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   },
    //   {
    //     id: 'Shopper',
    //     role_name: 'Shopper',
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   },
    //   {
    //     id: 'Influencer',
    //     role_name: 'Influencer',
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   }

    // ], {});

    await queryInterface.bulkInsert('products', [
      {
        id: uuidv4(),
        sku:'111111',
        collection: '111111111',
        price: '11111111',
        sales_price: '111111111',
        subtext: '111111111',
        description: '111111111',
        quantity: '111111111',
        image: '1111111',
        instructions: '1111111111',
        ingredients: '111111111',
        concern_list: '22222222',
        product_type: '33333333333',
        reviews: '4444444444',
        sold: '444444444444',
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
