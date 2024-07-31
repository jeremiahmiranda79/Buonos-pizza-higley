const { Model, DataTypes } = require('sequelize');
const connection = require('../config/connection');
class SaucePasta extends Model {};
SaucePasta.init(
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
    price3oz: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    price16oz: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  },
  {
    sequelize: connection,
    timestamps: true,
    freezeTableName: true,
    modelName: 'saucePasta'
  }
);
module.exports = SaucePasta;