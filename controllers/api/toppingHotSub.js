const router = require('express').Router();
const { ToppingsHotSub } = require('../../models');
//#region /***** CREATE ******/
  //Route to create new topping hot sub
  //Post method with endpoint '/api/toppingHotSub/createToppingHotSub'
  router.post('/createToppingHotSub', async (req, res) => {
    try {
      const newToppingHotSub = await ToppingsHotSub.create({
        name: req.body.name,
        price: req.body.price
      }); 
      res.status(201).json(newToppingHotSub);
    } 
    catch (error) {
      console.log(error);
      res.status(500).json(error);//500 - internal server error
    };
  });
//#endregion
//#region /***** READ ******/
  //Route to retrieve all toppings hot sub
  //GET method with endpoint '/api/toppingHotSub'
  router.get('/', async (req, res) => {
    try {
      const allToppingsHotSub = await ToppingsHotSub.findAll();
      res.status(200).json(allToppingsHotSub);
    }
    catch (error) {
      console.log(error);
      res.status(500).json(error);//500 - internal server error
    }
  });
  //Route to retrieve a single topping hot sub
  //GET method with endpoint '/api/toppingHotSub/:toppingHotSubId'
  router.get('/:toppingHotSubId', async (req, res) => {
    try {
      const toppingHotSub = await ToppingsHotSub.findByPk(req.params.toppingHotSubId);
      res.status(200).json(toppingHotSub);
    }
    catch (error) {
      console.log(error);
      res.status(500).json(error);//500 - internal server error
    }
  });
//#endregion
//#region /***** UPDATE ******/
  //Route to update a single topping hot sub
  //POST method with endpoint '/api/toppingHotSub/updateToppingHotSub/:toppingHotSubId
  router.put('/updateToppingHotSub/:toppingHotSubId', async (req, res) => {
    try {
      const updateToppingHotSub = await ToppingsHotSub.update(req.body, {
        where: {
          id: req.params.toppingHotSubId
        }
      });
      if (!updateToppingHotSub[0]) return res.status(404).json({ message: 'Not found!' });//404 - Not Found
      res.status(202).json(updateToppingHotSub);
    } 
    catch (error) {
      console.log(error);
      res.status(500).json(error);//500 - internal server error
    }
  });
//#endregion
//#region /***** DELETE ******/
  //Route to delete a single topping hot sub
  //DELETE method with endpoint '/api/toppingHotSub/deleteToppingHotSub/:toppingHotSubId'
  router.delete('/deleteToppingHotSub/:toppingHotSubId', async (req, res) => {
    try {
      const deleteToppingHotSub = await ToppingsHotSub.destroy({
        where: {
          id: req.params.toppingHotSubId
        }
      });
      if (!deleteToppingHotSub) return res.status(404).json({ message: 'Not found!' });//404 - Not Found
      res.status(202).json(deleteToppingHotSub);
    } 
    catch (error) {
      console.log(error);
      res.status(500).json(error);//500 - internal server error
    }
  });
//#endregion
module.exports = router;