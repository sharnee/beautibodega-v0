'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // models.users.belongsToMany(models.brands, {through: models.brandAdmins})
      models.users.hasMany(models.brands, {foreignKey: 'founder'})
    }
  }
  users.init({
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    profile_picture: DataTypes.UUID,
    favorite_products: DataTypes.STRING,
    favorite_brands: DataTypes.STRING,
    name: DataTypes.STRING,
    followers: DataTypes.STRING,
    following: DataTypes.STRING,
    tags: DataTypes.STRING,
    role: DataTypes.STRING,
    reviews: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};