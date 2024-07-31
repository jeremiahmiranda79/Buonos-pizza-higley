const { Model, DataTypes } = require('sequelize');
const connection = require('../config/connection');
class Images extends Model {};
Images.init(
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
    url: {
      type: DataTypes.STRING,
      allowNull: false
    },
    img: {
      type: DataTypes.BLOB,
      allowNull: true
    }
  },
  {
    sequelize: connection,
    timestamps: true,
    freezeTableName: true,
    modelName: 'images'
  }
);
module.exports = Images;