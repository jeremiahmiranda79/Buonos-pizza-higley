const { Model, DataTypes } = require('sequelize');
const connection = require('../config/connection');
class ToppingsColdSub extends Model {};
ToppingsColdSub.init(
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
    modelName: 'toppingsColdSub'
  }
);
module.exports = ToppingsColdSub;