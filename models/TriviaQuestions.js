const { Model, DataTypes} = require('sequelize');

const connection = require('../config/connection');

class TriviaQuestions extends Model {};
TriviaQuestions.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },

    question: {
      type: DataTypes.STRING,
      allowNull: false
    },

    guess1: {
      type: DataTypes.STRING,
      allowNull: false
    },
    guess2: {
      type: DataTypes.STRING,
      allowNull: false
    },
    guess3: {
      type: DataTypes.STRING,
      allowNull: false
    },
    guess4: {
      type: DataTypes.STRING,
      allowNull: false
    },

    answer: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },

  {
    sequelize: connection,
    timestamps: true,
    freezeTableName: true,
    modelName: 'triviaQuestion'
  }
)

Model.exports = TriviaQuestions;