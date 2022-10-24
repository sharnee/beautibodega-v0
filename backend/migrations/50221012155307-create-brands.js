'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('brands', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      brand_name: {
        type: Sequelize.STRING
      },
      admin_user: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING(10000)
      },
      logo: {
        type: Sequelize.UUID,
        references: {
          model: 'images',
          key: 'id'
        }
      },
      products: {
        type: Sequelize.STRING(9999999)
      },
      collections: {
        type: Sequelize.STRING(9999999)
      },
      featured_products: {
        type: Sequelize.STRING(9999999)
      },
      popular_brand: {
        type: Sequelize.BOOLEAN
      },
      video_link: {
        type: Sequelize.STRING
      },
      verified: {
        type: Sequelize.BOOLEAN
      },
      founder: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      phone: {
        type: Sequelize.STRING,
      },
      websiteURL: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('brands');
  }
};