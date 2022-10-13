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
        type: Sequelize.STRING
      },
      favorite_brands: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      followers: {
        type: Sequelize.STRING
      },
      following: {
        type: Sequelize.STRING
      },
      tags: {
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize.STRING,
        references: {
          model: 'roles',
          key: 'id'
        }
      },
      gender: {
        type: Sequelize.STRING
      },
      reviews: {
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
    await queryInterface.dropTable('users');
  }
};