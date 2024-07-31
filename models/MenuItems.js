const { Model, DataTypes } = require('sequelize');
const connection = require('../config/connection');
class MenuItems extends Model {};
MenuItems.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    categoryId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'categories',
        key: 'id'
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
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
    },
    size1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    price1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    size2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    price2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    size3: {
      type: DataTypes.STRING,
      allowNull: true
    },
    price3: {
      type: DataTypes.STRING,
      allowNull: true
    },
    addonsDescription1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    addonsPrice1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    addonsDescription2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    addonsPrice2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    addonsDescription3: {
      type: DataTypes.STRING,
      allowNull: true
    },
    addonsPrice3: {
      type: DataTypes.STRING,
      allowNull: true
    },
    toppingPizzaFull: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    toppingPizzaSlice: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    toppingPizzaGlutenFree: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    toppingHotSub: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    toppingColdSub: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    toppingDesert: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    saladDressing: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    wingSauce: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    pastaType: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    marinaraSauce: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    desertSauce: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    desertType: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    stuffingCalzone: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  },
  {
    sequelize: connection,
    timestamps: true,
    freezeTableName: true,
    modelName: 'menuitems'
  }
);
module.exports = MenuItems;