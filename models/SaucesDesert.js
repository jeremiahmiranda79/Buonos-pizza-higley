const { Model, DataTypes } = require('sequelize');
const connection = require('../config/connection');
class SaucesDesert extends Model {};
SaucesDesert.init(
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
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  },
  {
    sequelize: connection,
    timestamps: true,
    freezeTableName: true,
    modelName: 'saucesDesert'
  }
);
module.exports = SaucesDesert;