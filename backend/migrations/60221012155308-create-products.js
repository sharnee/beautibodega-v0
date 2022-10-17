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
      name: {
        type: Sequelize.STRING
      },
      sku: {
        type: Sequelize.STRING
      },
      collection: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.FLOAT
      },
      sales_price: {
        type: Sequelize.FLOAT
      },
      subtext: {
        type: Sequelize.STRING(10000)
      },
      description: {
        type: Sequelize.STRING(10000)
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      images: {
        type: Sequelize.STRING(10000)
      },
      thumbnail: {
        type: Sequelize.UUID,
        references: {
          model: 'images',
          key: 'id'
        }
      },
      instructions: {
        type: Sequelize.STRING(10000)
      },
      ingredients: {
        type: Sequelize.STRING(10000)
      },
      concern_list: {
        type: Sequelize.STRING(10000)
      },
      product_type: {
        type: Sequelize.STRING
      },
      sold: {
        type: Sequelize.INTEGER
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