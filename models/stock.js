'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class stock extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //models.stock.belongsToMany(models.user, {through: "stocksUsers"}) stocksId, usersId
      //models.user(stock)
    }
  };
  stock.init({
    name: DataTypes.STRING,
    symbol: DataTypes.STRING,
    currentValue: DataTypes.INTEGER,
    closingValue: DataTypes.INTEGER,
    threeMonthValue: DataTypes.INTEGER,
    sixMonthValue: DataTypes.INTEGER,
    oneYearValue: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'stock',
  });
  return stock;
};