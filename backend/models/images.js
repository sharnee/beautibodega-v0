'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class images extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.images.hasMany(models.users, {foreignKey: 'profile_picture'})
      models.images.hasMany(models.brands, {foreignKey: 'logo'})
      models.images.hasMany(models.products, {foreignKey: 'thumbnail'})
    }
  }
  images.init({
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'images',
  });
  return images;
};