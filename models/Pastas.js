const { Model, DataTypes } = require('sequelize');
const connection = require('../config/connection');
class Pastas extends Model {};
Pastas.init(
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
    price5oz:{
      type: DataTypes.FLOAT,
      allowNull: false
    },
    price9oz: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  },
  {
    sequelize: connection,
    timestamps: true,
    freezeTableName: true,
    modelName: 'pastas'
  }
);
module.exports = Pastas;