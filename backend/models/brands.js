'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class brands extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // models.brands.belongsToMany(models.users, {through: models.brandAdmins})
      models.brands.hasMany(models.reviews, {foreignKey: 'prodBrandID'})
    }
  }
  brands.init({
    brand_name: DataTypes.STRING,
    admin_user: DataTypes.STRING,
    description: DataTypes.STRING,
    logo: DataTypes.STRING,
    products: DataTypes.STRING,
    collections: DataTypes.STRING,
    featured_products: DataTypes.STRING,
    popular_brand: DataTypes.BOOLEAN,
    video_link: DataTypes.STRING,
    verified: DataTypes.BOOLEAN,
    founder: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'brands',
  });
  return brands;
};