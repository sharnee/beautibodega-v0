'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      sku: {
        type: Sequelize.STRING
      },
      collection: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.STRING
      },
      sales_price: {
        type: Sequelize.STRING
      },
      subtext: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      quantity: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      thumbnail: {
        type: Sequelize.UUID,
        references: {
          model: 'images',
          key: 'id'
        }
      },
      instructions: {
        type: Sequelize.STRING
      },
      ingredients: {
        type: Sequelize.STRING
      },
      concern_list: {
        type: Sequelize.STRING
      },
      product_type: {
        type: Sequelize.STRING
      },
      sold: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('products');
  }
};