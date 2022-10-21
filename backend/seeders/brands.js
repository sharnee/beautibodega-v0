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
     await queryInterface.bulkInsert('brands', [
      {
        id: uuidv4(),
        brand_name: 'CAY SKIN',
        description: `Cay Skin is daily skincare with SPF—created to keep you glowing AND protected throughout the year. Cay Skin is silicone-free, vegan, cruelty-free, reef-friendly and dermatologist-tested.
        Cay Skin products include a custom blend of gentle island-based ingredients like Sea Moss, and and high performance skincare actives, like Niacinamide. We're on a mission to create sustainable, skin loving products for everyone under the sun to feel confident in their skin every day.`,
        logo:'9d8db994-e48f-44fd-aa51-80e91032c0b2',
        products: '41814b55-0985-49b5-8835-77761bce5bc1, 5fd6e991-97f4-4716-a074-ffc754f8cb9a, a32815c3-6739-4cfd-a8e2-a39b4cba2e03, 6f5b71c1-7035-490e-aae7-ca46af302e26, f4902170-8aa2-4c95-8efb-a5486d14d803, ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        brand_name: 'MIELLE ORGANICS',
        description: `Monique Rodriguez founded MIELLE in 2014 after her healthy, hair care regimen for her tailbone-length hair became somewhat of a craze among her social media followers. The company began on the back of one product, the Advanced Hair Formula, a unique proprietary blend of herbs, amino acids and minerals to support healthy hair, skin, nails, and immune system.`,
        logo:'7c9aa985-4c9b-475f-9209-eff99c76bc65',
        products: '41814b55-0985-49b5-8835-77761bce5bc1, 5fd6e991-97f4-4716-a074-ffc754f8cb9a, a32815c3-6739-4cfd-a8e2-a39b4cba2e03, 6f5b71c1-7035-490e-aae7-ca46af302e26, f4902170-8aa2-4c95-8efb-a5486d14d803, ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        brand_name: 'TOWER 28 BEAUTY',
        description: `Tower 28 Beauty is named after a lifeguard tower in Santa Monica
        Tower 28 is the place where two iconic LA worlds come together. It sits at the crossroads of the Santa Monica pier and gritty Venice Beach. A meeting place for locals, Tower 28 symbolizes everything we believe in - community, healthy fun, and clean living.
        At Tower 28 Beauty, we like our beauty products the way we like our beaches: clean, full of sunshine, and for everyone.`,
        logo:'7c961e61-99d4-4dfa-8a98-504d7ac2bea4',
        products: '41814b55-0985-49b5-8835-77761bce5bc1, 5fd6e991-97f4-4716-a074-ffc754f8cb9a, a32815c3-6739-4cfd-a8e2-a39b4cba2e03, 6f5b71c1-7035-490e-aae7-ca46af302e26, f4902170-8aa2-4c95-8efb-a5486d14d803, ',
        createdAt: new Date(),
        updatedAt: new Date()
      },

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
