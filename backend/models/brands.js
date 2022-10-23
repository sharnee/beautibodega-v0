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
    description: DataTypes.STRING(10000),
    logo: DataTypes.UUID,
    products: DataTypes.STRING(9999999),
    collections: DataTypes.STRING(9999999),
    featured_products: DataTypes.STRING(9999999),
    popular_brand: DataTypes.BOOLEAN,
    video_link: DataTypes.STRING,
    verified: DataTypes.BOOLEAN,
    founder: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    websiteURL: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'brands',
  });
  return brands;
};