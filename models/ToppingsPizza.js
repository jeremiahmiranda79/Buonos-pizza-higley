const { Model, DataTypes } = require('sequelize');
const connection = require('../config/connection');
class ToppingsPizza extends Model {};
ToppingsPizza.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    priceFull: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    priceHalf: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    priceSlice: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    priceGlutenFree: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  },
  {
    sequelize: connection,
    timestamps: true,
    freezeTableName: true,
    modelName: 'toppingsPizza'
  }
);
module.exports = ToppingsPizza;