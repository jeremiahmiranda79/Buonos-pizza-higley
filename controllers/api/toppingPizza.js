const router = require('express').Router();
const { ToppingsPizza } = require('../../models');
//#region /***** CREATE ******/
  //Route to create new topping pizza
  //Post method with endpoint '/api/toppingPizza/createToppingPizza'
  router.post('/createToppingPizza', async (req, res) => {
    try {
      const newToppingPizza = await ToppingsPizza.create({
        id: req.body.id,
        name: req.body.name,
        priceFull: req.body.priceFull,
        priceHalf: req.body.priceHalf,
        priceSlice: req.body.priceSlice,
        priceGlutenFree: req.body.priceGlutenFree
      });
      res.status(201).json(newToppingPizza);
    } 
    catch (error) {
      console.log(error);
      res.status(500).json(error);//500 - internal server error
    };
  });
//#endregion
//#region /***** READ ******/
  //Route to retrieve all toppings pizza
  //GET method with endpoint '/api/toppingPizza'
  router.get('/', async (req, res) => {
    try {
      const allToppingsPizza = await ToppingsPizza.findAll();
      res.status(200).json(allToppingsPizza);
    }
    catch (error) {
      console.log(error);
      res.status(500).json(error);//500 - internal server error
    }
  });
  //Route to retrieve a single toppings pizza
  //GET method with endpoint '/api/toppingPizza/:toppingPizzaId'
  router.get('/:toppingPizzaId', async (req, res) => {
    try {
      const toppingPizza = await ToppingsPizza.findByPk(req.params.toppingPizzaId);
      res.status(200).json(toppingPizza);
    } 
    catch (error) {
      console.log(error);
      res.status(500).json(error);//500 - internal server error
    }
  });
//#endregion
//#region /***** UPDATE ******/
  //Route to update a single topping pizza
  //POST method with endpoint '/api/toppingPizza/updateToppingPizza/:toppingPizzaId'
  router.put('/updateToppingPizza/:toppingPizzaId', async (req, res) => { 
    try {
      const updateToppingPizza = await ToppingsPizza.update(req.body, {
        where: {
          id: req.params.toppingPizzaId
        }
      });
      if (!updateToppingPizza[0]) return res.status(404).json({ message: 'Not found!' });//404 - Not Found
      res.status(202).json(updateToppingPizza);
    } 
    catch (error) {
      console.log(error);
      res.status(500).json(error);//500 - internal server error
    }
  });
//#endregion
//#region /***** DELETE ******/
  //Route to delete a single topping pizza
  //DELETE method with endpoint '/api/toppingPizza/deleteToppingPizza/:toppingPizzaId'
  router.delete('/deleteToppingPizza/:toppingPizzaId', async (req, res) => {
    try {
      const deleteToppingPizza = await ToppingsPizza.destroy({
        where: {
          id: req.params.toppingPizzaId
        }
      });
      if (!deleteToppingPizza) return res.status(404).json({ message: 'Not found!' });//404 - Not Found
      res.status(202).json(deleteToppingPizza);
    }
    catch (error) {
      console.log(error);
      res.status(500).json(error);//500 - internal server error
    };
  });
//#endregion
module.exports = router;