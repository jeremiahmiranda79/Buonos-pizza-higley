const router = require('express').Router();

//Dressing Routes
const dressingRoutes = require('./dressing');
router.use('/dressing', dressingRoutes);

//Sauce Pasta Routes
const saucePastaRoutes = require('./saucePasta');
router.use('/saucePasta', saucePastaRoutes);

//Sauce Wing Routes
const sauceWingRoutes = require('./sauceWing');
router.use('/sauceWing', sauceWingRoutes);

//Pasta Routes
const pastaRoutes = require('./pasta');
router.use('/pasta', pastaRoutes);

//Category Routes

//Employee Routes
const employeeRoutes = require('./employee');
router.use('/employee', employeeRoutes);

//Home Page Routes
const homeRoutes = require('./home');
router.use('/home', homeRoutes);

//Hours Routes

//Image Routes

//Information Routes
const informationRoutes = require('./information');
router.use('/information', informationRoutes);

//Location Routes
const locationRoutes = require('./location');
router.use('/location', locationRoutes);

//Menu Item Routes
const menuRoutes = require('./menu');
router.use('/menu', menuRoutes);

//Sauce Desert Routes
const sauceDesertRoutes = require('./sauceDesert');
router.use('/sauceDesert', sauceDesertRoutes);

//Topping Cold Sub Routes
const toppingColdSubRoutes = require('./toppingColdSub');
router.use('/toppingColdSub', toppingColdSubRoutes);

//Topping Desert Routes
const toppingDesertRoutes = require('./toppingDesert');
router.use('/toppingDesert', toppingDesertRoutes);

//Topping Hot Sub Routes
const toppingHotSubRoutes = require('./toppingHotSub');
router.use('/toppingHotSub', toppingHotSubRoutes);

//Topping Pizza Routes
const toppingPizzaRoutes = require('./toppingPizza');
router.use('/toppingPizza', toppingPizzaRoutes);

//Trivia Questions Routes
const triviaQuestionsRoutes = require('./triviaQuestions');
router.use('/triviaQuestions', triviaQuestionsRoutes);

//Trivia Scores Routes
const triviaScores = require('./triviaScores');
router.use('/triviaScores', triviaScores);

module.exports = router;