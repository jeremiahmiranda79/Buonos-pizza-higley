const router = require('express').Router();
const { SauceWing } = require('../../models');
//#region /***** CREATE ******/
  //Route to create new sauce wing
  //Post method with endpoint '/api/sauceWing/createSauceWing'
  router.post('/createSauceWing', async (req, res) => {
    try {
      const newSauceWing = await SauceWing.create({
        name: req.body.name,
        price3oz: req.body.price3oz,
        price16oz: req.body.price16oz
      });
      res.status(201).json(newSauceWing);
    } 
    catch (error) {
      console.log(error);
      res.status(500).json(error);//500 - internal server error
    };
  });
//#endregion
//#region /***** READ ******/
  //Route to retrieve all sauce wing
  //GET method with endpoint '/api/sauceWing'
  router.get('/', async (req, res) => {
    try {
      const allSauceWing = await SauceWing.findAll();
      res.status(200).json(allSauceWing);
    }
    catch (error) {
      console.log(error);
      res.status(500).json(error);//500 - internal server error
    }
  });
  //Route to retrieve a single sauce wing
  //GET method with endpoint '/api/sauceWing/:sauceWingId'
  router.get('/:sauceWingId', async (req, res) => {
    try {
      const sauceWing = await SauceWing.findByPk(req.params.sauceWingId);
      res.status(200).json(sauceWing);
    } 
    catch (error) {
      console.log(error);
      res.status(500).json(error);//500 - internal server error
    }
  });
//#endregion
//#region /***** UPDATE ******/
  //Route to update a single sauce wing
  //POST method with endpoint '/api/sauceWing/updateSauceWing/:sauceWingId'
  router.put('/updateSauceWing/:sauceWingId', async (req, res) => { 
    try {
      const updateSauceWing = await SauceWing.update(req.body, {
        where: {
          id: req.params.sauceWingId
        }
      });
      if (!updateSauceWing[0]) return res.status(404).json({ message: 'Not found!' });//404 - Not Found
      res.status(202).json(updateSauceWing);
    } 
    catch (error) {
      console.log(error);
      res.status(500).json(error);//500 - internal server error
    }
  });
//#endregion
//#region /***** DELETE ******/
  //Route to delete a single sauce wing
  //DELETE method with endpoint '/api/sauceWing/deleteSauceWing/:sauceWingId'
  router.delete('/deleteSauceWing/:sauceWingId', async (req, res) => {
    try {
      const deleteSauceWing = await SauceWing.destroy({
        where: {
          id: req.params.sauceWingId
        }
      });
      if (!deleteSauceWing) return res.status(404).json({ message: 'Not found!' });//404 - Not Foun
      res.status(202).json(deleteSauceWing);
    }
    catch (error) {
      console.log(error);
      res.status(500).json(error);//500 - internal server error
    };
  });
//#endregion
module.exports = router;