const { Model, DataTypes } = require('sequelize');
const connection = require('../config/connection');
class Categories extends Model {};
Categories.init(
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
    image: {
      type: DataTypes.STRING,
      allowNull: true
    },
    switchy: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  },
  {
    sequelize: connection,
    timestamps: true,
    freezeTableName: true,
    modelName: 'categories'
  }
);
module.exports = Categories;