const { Model, DataTypes } = require('sequelize');

const connection = require('../config/connection');

class TriviaScores extends Model {};

TriviaScores.init(
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

    email: {
      type: DataTypes.STRING,
      allowNull: true
    },

    score: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },

  {
    sequelize: connection,
    timestamps: true,
    freezeTableName: true,
    modelName: 'triviaScores'
  }
);

module.exports = TriviaScores;