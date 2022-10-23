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
    secondary_id: DataTypes.UUID,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    profile_picture: DataTypes.UUID,
    favorite_products: DataTypes.STRING(100000),
    favorite_brands: DataTypes.STRING(100000),
    name: DataTypes.STRING,
    followers: DataTypes.STRING(10485760),
    following: DataTypes.STRING(10485760),
    role: DataTypes.STRING,
    reviews: DataTypes.STRING(10000),
    tags: DataTypes.STRING(10000),
    postIDs: DataTypes.STRING(999999)
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};