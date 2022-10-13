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
        type: Sequelize.STRING
      },
      logo: {
        type: Sequelize.STRING,
        // references: {
        //   model: 'images',
        //   key: 'id'
        // }
      },
      products: {
        type: Sequelize.STRING
      },
      collections: {
        type: Sequelize.STRING
      },
      featured_products: {
        type: Sequelize.STRING
      },
      popular_brand: {
        type: Sequelize.BOOLEAN
      },
      reviews: {
        type: Sequelize.STRING
      },
      video_link: {
        type: Sequelize.STRING
      },
      verified: {
        type: Sequelize.BOOLEAN
      },
      founder: {
        type: Sequelize.UUID,
        references: {
          model: 'users',
          key: 'id'
        }
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