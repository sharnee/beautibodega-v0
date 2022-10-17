'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.products.hasMany(models.reviews, {foreignKey: 'prodBrandID'})
    }
  }
  products.init({
    name: DataTypes.STRING,
    sku: DataTypes.STRING,
    collection: DataTypes.STRING,
    price: DataTypes.FLOAT,
    sales_price: DataTypes.FLOAT,
    subtext: DataTypes.STRING(10000),
    description: DataTypes.STRING(10000),
    quantity: DataTypes.INTEGER,
    images: DataTypes.STRING(10000),
    thumbnail: DataTypes.STRING,
    instructions: DataTypes.STRING(10000),
    ingredients: DataTypes.STRING(10000),
    concern_list: DataTypes.STRING(10000),
    product_type: DataTypes.STRING,
    sold: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'products',
  });
  return products;
};