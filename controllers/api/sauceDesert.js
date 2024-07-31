const router = require('express').Router();
const { SaucesDesert } = require('../../models');
//#region /***** CREATE ******/
  //Route to create new desert sauce
  //Post method with endpoint '/api/sauceDesert/createSauceDesert'
  router.post('/createSauceDesert', async (req, res) => {
    try {
      const newSauceDesert = await SaucesDesert.create({
        name: req.body.name,
        price: req.body.price
      });
      res.status(201).json(newSauceDesert);
    } 
    catch (error) {
      console.log(error);
      res.status(500).json(error);//500 - internal server error
    };
  });
//#endregion
//#region /***** READ ******/
  //Route to retrieve all sauces desert
  //GET method with endpoint '/api/sauceDesert'
  router.get('/', async (req, res) => {
    try {
      const allSaucesDeseret = await SaucesDesert.findAll();
      res.status(200).json(allSaucesDeseret);
    }
    catch (error) {
      console.log(error);
      res.status(500).json(error);//500 - internal server error
    }
  });
  //Route to retrieve a single sauce desert
  //GET method with endpoint '/api/sauceDesert/:sauceDesertId'
  router.get('/:sauceDesertId', async (req, res) => {
    try {
      const sauceDesert = await SaucesDesert.findByPk(req.params.sauceDesertId);
      res.status(200).json(sauceDesert);
    } 
    catch (error) {
      console.log(error);
      res.status(500).json(error);//500 - internal server error
    }
  });
//#endregion
//#region /***** UPDATE ******/
  //Route to update a single sauce desert
  //POST method with endpoint '/api/sauceDesert/updateSauceDesert/:sauceDesertId'
  router.put('/updateSauceDesert/:sauceDesertId', async (req, res) => { 
    try {
      const updateSauceDesert = await SaucesDesert.update(req.body, {
        where: {
          id: req.params.sauceDesertId
        }
      });
      if (!updateSauceDesert[0]) return res.status(404).json({ message: 'Not found!' });//404 - Not Found
      res.status(202).json(updateSauceDesert);
    } 
    catch (error) {
      console.log(error);
      res.status(500).json(error);//500 - internal server error
    }
  });
//#endregion
//#region /***** DELETE ******/
  //Route to delete a single sauce desert
  //DELETE method with endpoint '/api/sauceDesert/deleteSauceDesert/:sauceDesertId'
  router.delete('/deleteSauceDesert/:sauceDesertId', async (req, res) => {
    try {
      const deleteSauceDesert = await SaucesDesert.destroy({
        where: {
          id: req.params.sauceDesertId
        }
      });
      if (!deleteSauceDesert) return res.status(404).json({ message: 'Not found!' });//404 - Not Found
      res.status(202).json(deleteSauceDesert);
    }
    catch (error) {
      console.log(error);
      res.status(500).json(error);//500 - internal server error
    };
  });
//#endregion
module.exports = router;