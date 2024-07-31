const { Model, DataTypes } = require('sequelize');
const connection = require('../config/connection');
class Location extends Model {};
Location.init(
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
    nameSwitch: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    name1: {
      type: DataTypes.STRING,
      allowNull: false
    },
    map1: {
      type: DataTypes.STRING,
      allowNull: false
    },
    hours: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name2: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description2: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize: connection,
    timestamps: true,
    freezeTableName: true,
    modelName: 'location'
  }
);
module.exports = Location;