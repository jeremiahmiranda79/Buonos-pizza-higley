const router = require('express').Router();
const { ToppingsColdSub } = require('../../models');
//#region /***** CREATE ******/
  //Route to create new topping cold sub
  //Post method with endpoint '/api/toppingColdSub/createToppingColdSub'
  router.post('/createToppingColdSub', async (req, res) => {
    try {
      const newToppingColdSub = await ToppingsColdSub.create({
        name: req.body.name,
        price: req.body.price
      });
      res.status(201).json(newToppingColdSub);
    } 
    catch (error) {
      console.log(error);
      res.status(500).json(error);//500 - internal server error
    };
  });
//#endregion
//#region /***** READ ******/
  //Route to retrieve all toppings cold sub
  //GET method with endpoint '/api/toppingColdSub'
  router.get('/', async (req, res) => {
    try {
      const allToppingsColdSub = await ToppingsColdSub.findAll();
      res.status(200).json(allToppingsColdSub);
    }
    catch (error) {
      console.log(error);
      res.status(500).json(error);//500 - internal server error
    }
  });
//Route to retrieve a single topping cold sub
//GET method with endpoint '/api/toppingColdSub/:toppingColdSubId'
  router.get('/:toppingColdSubId', async (req, res) => {
    try {
      const toppingColdSub = await ToppingsColdSub.findByPk(req.params.toppingColdSubId);
      res.status(200).json(toppingColdSub);
    }
    catch (error) {
      console.log(error);
      res.status(500).json(error);//500 - internal server error
    }
  });
//#endregion
//#region /***** UPDATE ******/
  //Route to update a single topping cold sub
  //POST method with endpoint '/api/toppingColdSub/updateToppingColdSub/:toppingColdSubId
  router.put('/updateToppingColdSub/:toppingColdSubId', async (req, res) => {
    try {
      const updateToppingColdSub = await ToppingsColdSub.update(req.body, {
        where: {
          id: req.params.toppingColdSubId
        }
      });
      if (!updateToppingColdSub[0]) return res.status(404).json({ message: 'Not found!' });//404 - Not Found
      res.status(202).json(updateToppingColdSub);
    } 
    catch (error) {
      console.log(error);
      res.status(500).json(error);//500 - internal server error
    }
  });
//#endregion
//#region /***** DELETE ******/
  //Route to delete a single topping cold sub
  //DELETE method with endpoint '/api/toppingColdSub/deleteToppingColdSub/:toppingColdSubId'
  router.delete('/deleteToppingColdSub/:toppingColdSubId', async (req, res) => {
    try {
      const deleteToppingColdSub = await ToppingsColdSub.destroy({
        where: {
          id: req.params.toppingColdSubId
        }
      });
      if (!deleteToppingColdSub) return res.status(404).json({ message: 'Not found!' });//404 - Not Found
      res.status(202).json(deleteToppingColdSub);
    } 
    catch (error) {
      console.log(error);
      res.status(500).json(error);//500 - internal server error
    }
  });
//#endregion
module.exports = router;