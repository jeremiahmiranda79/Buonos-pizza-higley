const router = require('express').Router();
const {
  ToppingsDesert
} = require('../../models');
//#region /***** CREATE ******/
  //Route to create new topping desert
  //Post method with endpoint '/api/toppingDesert/createToppingDesert'
  router.post('/createToppingDesert', async (req, res) => {
    try {
      const newToppingDesert = await ToppingsDesert.create({
        name: req.body.name,
        price: req.body.price
      });
      res.status(201).json(newToppingDesert);
    } 
    catch (error) {
      console.log(error);
      res.status(500).json(error);//500 - internal server error
    };
  });
//#endregion
//#region /***** READ ******/
  //Route to retrieve all toppings desert
  //GET method with endpoint '/api/toppingDesert'
  router.get('/', async (req, res) => {
    try {
      const allToppingsDesert = await ToppingsDesert.findAll();
      res.status(200).json(allToppingsDesert);
    }
    catch (error) {
      console.log(error);
      res.status(500).json(error);//500 - internal server error
    }
  });
  //Route to retrieve a single topping desert
  //GET method with endpoint '/api/toppingDesert/:toppingDesert'
  router.get('/:toppingDesertId', async (req, res) => {
    try {
      const toppingDesert = await ToppingsDesert.findByPk(req.params.toppingDesertId);
      res.status(200).json(toppingDesert);
    }
    catch (error) {
      console.log(error);
      res.status(500).json(error);//500 - internal server error
    }
  });
//#endregion
//#region /***** UPDATE ******/
  //Route to update a single topping desert
  //POST method with endpoint '/api/toppingDesert/updateToppingDesert/:toppingDesertId
  router.put('/updateToppingDesert/:toppingDesertId', async (req, res) => {
    try {
      const updateToppingDesert = await ToppingsDesert.update(req.body, {
        where: {
          id: req.params.toppingDesertId
        }
      });
      if (!updateToppingDesert[0]) return res.status(404).json({ message: 'Not found!' });//404 - Not Found
      res.status(202).json(updateToppingDesert);
    } 
    catch (error) {
      console.log(error);
      res.status(500).json(error);//500 - internal server error
    }
  });
//#endregion
//#region /***** DELETE ******/
  //Route to delete a single topping desert
  //DELETE method with endpoint '/api/toppingDesert/deleteToppingDesert/:toppingDesertId'
  router.delete('/deleteToppingDesert/:toppingDesertId', async (req, res) => {
    try {
      const deleteToppingDesert = await ToppingsDesert.destroy({
        where: {
          id: req.params.toppingDesertId
        }
      });
      if (!deleteToppingDesert) return res.status(404).json({ message: 'Not found!' });//404 - Not Found
      res.status(202).json(deleteToppingDesert);
    } 
    catch (error) {
      console.log(error);
      res.status(500).json(error);//500 - internal server error
    }
  });
//#endregion
module.exports = router;