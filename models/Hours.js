const { Model, DataTypes } = require('sequelize');

const connection = require('../config/connection');

class Hours extends Model {};

Hours.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  
  {
    sequelize: connection,
    timestamps: true,
    freezeTableName: true,
    modelName: 'hours'
  }
);

module.exports = Hours;