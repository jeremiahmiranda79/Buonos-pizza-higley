const { Model, DataTypes } = require('sequelize');
const connection = require('../config/connection');
class StuffingsCalzone extends Model {};
StuffingsCalzone.init(
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
    priceSmall: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    priceLarge: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  },
  {
    sequelize: connection,
    timestamps: true,
    freezeTableName: true,
    modelName: 'stuffingsCalzone'
  }
);
module.exports = StuffingsCalzone;