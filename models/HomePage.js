const { Model, DataTypes } = require('sequelize');
const connection = require('../config/connection');
class HomePage extends Model {};
HomePage.init(
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
    name1: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description1: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name1Switch: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    name2: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description2: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name2Switch: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    name3_1: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description3_1: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name3_1Switch: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    description3_2: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name3_2Switch: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    name4: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description4: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name4Switch: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    name5_1: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description5_1: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name5_1Switch: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    description5_2: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    name5_2Switch: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    description5_3: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name5_3Switch: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    description5_4: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name5_4Switch: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    description5_5: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    name5_5Switch: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    slice_switch: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    doordash_switch: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    ubereats_switch: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    grubhub_switch: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  },
  {
    sequelize: connection,
    timestamps: true,
    freezeTableName: true,
    modelName: 'homepage'
  }
);
module.exports = HomePage;