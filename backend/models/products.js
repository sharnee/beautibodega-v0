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
      models.products.hasMany(models.reviews, {foreignKey: 'reviewForID'})
    }
  }
  products.init({
    sku: DataTypes.STRING,
    collection: DataTypes.STRING,
    price: DataTypes.STRING,
    sales_price: DataTypes.STRING,
    subtext: DataTypes.STRING,
    description: DataTypes.STRING,
    quantity: DataTypes.STRING,
    image: DataTypes.STRING,
    thumbnail: DataTypes.STRING,
    instructions: DataTypes.STRING,
    ingredients: DataTypes.STRING,
    concern_list: DataTypes.STRING,
    product_type: DataTypes.STRING,
    reviews: DataTypes.STRING,
    sold: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'products',
  });
  return products;
};