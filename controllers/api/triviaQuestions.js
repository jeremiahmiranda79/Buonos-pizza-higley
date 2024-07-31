const router = require('express').Router();
const { TriviaQuestions } = require('../../models');

//#region /***** READ ******/
  //Route to retrieve all toppings pizza
  //GET method with endpoint '/api/toppingPizza'
  router.get('/trivia-game', async (req, res) => {
    try {
      const allQuestions = await TriviaQuestions.findAll();
      res.status(200).json(allQuestions);
    }
    catch (error) {
      console.log(error);
      res.status(500).json(error);//500 - internal server error
    }
  });
  //#endregion

  module.exports = router;