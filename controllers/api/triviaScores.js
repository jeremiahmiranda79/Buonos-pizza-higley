const router = require('express').Router();

const { TriviaScores } = require('../../models');

//#region /***** CREATE *****/
  //Route to create new trivia score
  //Post method with endpoint '/api/triviaScores/createTriviaScores'
  router.post('/createTriviaScores', async (req, res) => {
    try {
      const score = await TriviaScores.create({
        name: req.body.name,
        email: req.body.email,
        score: req.body.score
      });
      
      res.status(201).json(score);
    }
    catch (error) {
      res.status(500).json(error);//500 - internal server error
    };
  });
//#endregion

//#region /***** READ ******/
  //Route to retrieve all trivia scores
  //GET method with endpoint '/api/triviaScores'
  router.get('/', async (req, res) => {
    try {
      const scores = await TriviaScores.findAll();
      res.status(200).json(scores);
    }
    catch (error) {
      res.status(500).json(error);//500 - internal server error
    }
  });

  //Route to retrieve a single score
  //GET method with endpint '/api/triviaScores/:scoreId'
  router.get('/:scoreId', async (req, res) => {
    try {
      const score = await TriviaScores.findByPk(req.params.scoreId);
      res.status(200).json(score);
    }
    catch (error) {
      res.status(500).json(error);//500 - internal server error
    }
  });
//#endregion

//#region /***** UPDATE *****/
  //Route to update a single score
  //POST method with endpoint '/api/triviaScores/updateScore/:scoreId'
  router.put('/updateScore/:scoreId', async (req, res) => {
    try {
      const score = await TriviaScores.update(req.body, {
        where: {
          id: req.params.scoreId
        }
      });

      if (!score[0]) return res.status(202).json(score);

      res.status(202).json(score);
    }
    catch (error) {
      res.status(500).json(error);
    }
  });
//#endregion

//#region /***** DELETE *****/
  //Route to delete a single score
  //DELETE method with endpoint '/api/triviaScores/deleteScore/:scoreId'
  router.delete('/deleteScore/:scoreId', async (req, res) => {
    try {
      const score = await TriviaScores.destroy({
        where: {
          id: req.params.scoreId
        }
      });

      if (!score) return res.status(404).json({ message: 'Not found!' });

      res.status(202).json(score);
    }
    catch (error) {
      res.status(500).json(error);
    }
  })
//#endregion

module.exports = router;