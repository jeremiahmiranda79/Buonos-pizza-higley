const router = require('express').Router();
const { StuffingsCalzone } = require('../../models');
//#region /***** CREATE ******/
  //Route to create new stuffing calzone
  //Post method with endpoint '/api/stuffingCalzone/createStuffingCalzone'
  router.post('/createStuffingCalzone', async (req, res) => {
    try {
      const newStuffingCalzone = await StuffingsCalzone.create({
        id: req.body.id,
        name: req.body.name,
        priceSmall: req.body.priceSmall,
        priceLarge: req.body.priceLarge
      });
      res.status(201).json(newStuffingCalzone);
    } 
    catch (error) {
      console.log(error);
      res.status(500).json(error);//500 - internal server error
    };
  });
//#endregion
//#region /***** READ ******/
  //Route to retrieve all stuffings Calzone
  //GET method with endpoint '/api/stuffingCalzone'
  router.get('/', async (req, res) => {
    try {
      const allStuffingsCalzone = await StuffingsCalzone.findAll();
      res.status(200).json(allStuffingsCalzone);
    }
    catch (error) {
      console.log(error);
      res.status(500).json(error);//500 - internal server error
    }
  });
  //Route to retrieve a single stuffing calzone
  //GET method with endpoint '/api/stuffingCalzone/:stuffingCalzoneId'
  router.get('/:stuffingCalzoneId', async (req, res) => {
    try {
      const stuffingCalzone = await StuffingsCalzone.findByPk(req.params.stuffingCalzoneId);
      res.status(200).json(stuffingCalzone);
    } 
    catch (error) {
      console.log(error);
      res.status(500).json(error);//500 - internal server error
    }
  });
//#endregion
//#region /***** UPDATE ******/
  //Route to update a single stuffing calzone
  //POST method with endpoint '/api/stuffingCalzone/updateStuffingCalzone/:stuffingCalzoneId'
  router.put('/updateStuffingCalzone/:stuffingCalzoneId', async (req, res) => { 
    try {
      const updateStuffingCalzone = await StuffingsCalzone.update(req.body, {
        where: {
          id: req.params.stuffingCalzoneId
        }
      });
      if (!updateStuffingCalzone[0]) return res.status(404).json({ message: 'Not found!' });//404 - Not Found
      res.status(202).json(updateStuffingCalzone);
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
  router.delete('/deleteStuffingCalzone/:stuffingCalzoneId', async (req, res) => {
    try {
      const deleteStuffingCalzone = await StuffingsCalzone.destroy({
        where: {
          id: req.params.stuffingCalzoneId
        }
      });
      if (!deleteStuffingCalzone) return res.status(404).json({ message: 'Not found!' });//404 - Not Found
      res.status(202).json(deleteStuffingCalzone);
    }
    catch (error) {
      console.log(error);
      res.status(500).json(error);//500 - internal server error
    };
  });
//#endregion
module.exports = router;