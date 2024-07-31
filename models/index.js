const Categories = require('./Categories');
const MenuItems = require('./MenuItems');
const ToppingsPizza = require('./ToppingsPizza');
const ToppingsHotSub = require('./ToppingsHotSub');
const ToppingsColdSub = require('./ToppingsColdSub');
const ToppingsDesert = require('./ToppingsDesert');
const Employees = require('./Employees');
const Images = require('./Images');
const Dressings = require('./Dressings');
const SauceWing = require('./SauceWing');
const SaucesDesert = require('./SaucesDesert');
const Pastas = require('./Pastas');
const SaucePasta = require('./SaucePasta');
const Information = require('./Information');
const HomePage = require('./HomePage');
const Hours = require('./Hours');
const Location = require('./Location');
const StuffingsCalzone = require('./StuffingsCalzone');

const TriviaQuestions = require('./TriviaQuestions');

const TriviaScores = require('./TriviaScores');

// MenuItems to Categories
Categories.hasMany(MenuItems, {
  foreignKey: 'categoryId'
});

MenuItems.belongsTo(Categories, {
  foreignKey: 'categoryId'
});

module.exports = { 
  Categories, 
  MenuItems, 
  ToppingsPizza, 
  ToppingsHotSub, 
  ToppingsColdSub, 
  ToppingsDesert,
  Employees, 
  Images, 
  Dressings, 
  SauceWing, 
  SaucesDesert,
  Pastas, 
  SaucePasta,
  Information,
  HomePage,
  Hours,
  Location,
  StuffingsCalzone,
  TriviaQuestions,

  TriviaScores
};