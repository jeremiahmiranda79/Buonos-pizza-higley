const sequelize = require('../config/connection');
const { 
  Categories, 
  MenuItems, 
  ToppingsPizza, 
  Employees, 
  Images, 
  Dressings,
  SauceWing, 
  SaucesDesert,
  Pastas,
  ToppingsHotSub, 
  ToppingsColdSub,
  ToppingsDesert,
  SaucePasta,
  HomePage,
  Information,
  Hours,
  Location,
  StuffingsCalzone,

  // TriviaQuestions
  TriviaScores
} = require('../models');

const categoryData = require('./categoryData.json');
const menuItemData = require('./menuItemData.json');
const toppingPizzaData = require('./toppingPizzaData.json');
const employeeData = require('./employeeData.json');
const imageData = require('./imageData.json');
const dressingData = require('./dressingData.json');
const sauceWingData = require('./sauceWingData.json');
const sauceDesertData = require('./sauceDesertData.json');
const pastaData = require('./pastaData.json');
const toppingsHotSubData = require('./toppingsHotSubData.json');
const toppingsColdSubData = require('./toppingsColdSubData.json');
const toppingsDesertData = require('./toppingDesertData.json');
const saucePastaData = require('./saucePastaData.json');
const homePageData = require('./homePageData.json');
const informationData = require('./informationData.json');
const hoursData = require('./hoursData.json');
const locationData = require('./locationData.json');
const stuffingsCalzone = require('./stuffingsCalzoneData.json');

// const triviaQuestions = require('./triviaQuestion.json');
const triviaScores = require('./triviaScoresData.json');

const seedData = async () => {
  await sequelize.sync({ force: true });
  await Categories.bulkCreate(categoryData);
  await MenuItems.bulkCreate(menuItemData);
  await ToppingsPizza.bulkCreate(toppingPizzaData);
  await ToppingsHotSub.bulkCreate(toppingsHotSubData);
  await ToppingsColdSub.bulkCreate(toppingsColdSubData);
  await ToppingsDesert.bulkCreate(toppingsDesertData);
  await Employees.bulkCreate(employeeData, { individualHooks:true });
  await Images.bulkCreate(imageData);
  await Dressings.bulkCreate(dressingData);
  await SauceWing.bulkCreate(sauceWingData);
  await SaucesDesert.bulkCreate(sauceDesertData);
  await Pastas.bulkCreate(pastaData);
  await SaucePasta.bulkCreate(saucePastaData)
  await HomePage.bulkCreate(homePageData);
  await Information.bulkCreate(informationData);
  await Hours.bulkCreate(hoursData);
  await Location.bulkCreate(locationData);
  await StuffingsCalzone.bulkCreate(stuffingsCalzone);

  // await TriviaQuestions.bulkCreate(triviaQuestions);
  await TriviaScores.bulkCreate(triviaScores);

  console.log('All seeded!')
  process.exit(0);
};

seedData();