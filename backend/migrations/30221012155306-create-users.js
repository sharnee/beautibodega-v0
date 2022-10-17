'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      password: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      profile_picture: {
        type: Sequelize.UUID,
        references: {
          model: 'images',
          key: 'id'
        }
      },
      favorite_products: {
        type: Sequelize.STRING(100000)
      },
      favorite_brands: {
        type: Sequelize.STRING(100000)
      },
      name: {
        type: Sequelize.STRING
      },
      followers: {
        type: Sequelize.STRING(10485760)
      },
      following: {
        type: Sequelize.STRING(10485760)
      },
      role: {
        type: Sequelize.STRING,
        references: {
          model: 'roles',
          key: 'id'
        }
      },
      reviews: {
        type: Sequelize.STRING(10000)
      },
      tags: {
        type: Sequelize.STRING(10000)
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
    await queryInterface.dropTable('users');
  }
};