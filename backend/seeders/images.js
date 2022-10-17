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
     await queryInterface.bulkInsert('images', [
      {
        id:'0d83649e-ae79-4aa1-ac69-310013138705',
        image: 'https://firebasestorage.googleapis.com/v0/b/beauty-bodega.appspot.com/o/images%2F0d83649e-ae79-4aa1-ac69-310013138705?alt=media&token=45575e19-644a-4c6d-8ab6-74d3e719fc94',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:'1d56295e-c997-4e34-bf76-7cb1126dfacc',
        image: 'https://firebasestorage.googleapis.com/v0/b/beauty-bodega.appspot.com/o/images%2F1d56295e-c997-4e34-bf76-7cb1126dfacc?alt=media&token=080bc3b3-3fa0-44c1-b82a-e2997e2fe603',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:'496998c6-3957-43e5-883d-d1b1bd8c89c4',
        image: 'https://firebasestorage.googleapis.com/v0/b/beauty-bodega.appspot.com/o/images%2F496998c6-3957-43e5-883d-d1b1bd8c89c4?alt=media&token=c303cc6f-d80f-4c4d-b246-6f9e17dd05a7',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:'9d8db994-e48f-44fd-aa51-80e91032c0b2',
        image: 'https://firebasestorage.googleapis.com/v0/b/beauty-bodega.appspot.com/o/images%2F9d8db994-e48f-44fd-aa51-80e91032c0b2?alt=media&token=b4dc68a9-fb52-41f4-8822-359d8a1a057d',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:'7c9aa985-4c9b-475f-9209-eff99c76bc65',
        image: 'https://firebasestorage.googleapis.com/v0/b/beauty-bodega.appspot.com/o/images%2F7c9aa985-4c9b-475f-9209-eff99c76bc65?alt=media&token=682589fd-88ab-4adb-b182-10d920580040',
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