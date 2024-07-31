const router = require('express').Router();

const { Dressings } = require('../../models');

//#region /***** CREATE ******/
  //Route to create new dressing
  //Post method with endpoint '/api/dressing/createDressing'
  router.post('/createDressing', async (req, res) => {
    try {
      const dressing = await Dressings.create({
        name: req.body.name,
        price3oz: req.body.price3oz,
        price16oz: req.body.price16oz
      });
      res.status(201).json(dressing);
    } 
    catch (error) {
      res.status(500).json(error);//500 - internal server error
    };
  });
//#endregion

//#region /***** READ ******/
  //Route to retrieve all dressing
  //GET method with endpoint '/api/dressing'
  router.get('/', async (req, res) => {
    try {
      const dressings = await Dressings.findAll();
      res.status(200).json(dressings);
    }
    catch (error) {
      res.status(500).json(error);//500 - internal server error
    }
  });
  
  //Route to retrieve a single dresing
  //GET method with endpoint '/api/dressing/:dressingId'
  router.get('/:dressingId', async (req, res) => {
    try {
      const dressing = await Dressings.findByPk(req.params.dressingId);
      res.status(200).json(dressing);
    } 
    catch (error) {
      res.status(500).json(error);//500 - internal server error
    }
  });
//#endregion

//#region /***** UPDATE ******/
  //Routes to update a single dressing
  //POST method with endpoint '/api/dressing/updateDressing/:dressingId'
  router.put('/updateDressing/:dressingId', async (req, res) => {
    try {
      const dressing = await Dressings.update(req.body, {
        where: {
          id: req.params.dressingId
        }
      });

      if (!dressing[0]) return res.status(202).json(dressing);

      res.status(202).json(dressing);
    }
    catch (error) {
      res.status(500).json(error);//500 - internal server error
    }
  });
//#endregion

//#region /***** DELETE ******/
  //Route to delete a single dressing
  //DELETE method with endpoint '/api/dressing/deleteDressing/:dressingId'
  router.delete('/deleteDressing/:dressingId', async (req, res) => {
    try {
      const dressing = await Dressings.destroy({
        where: {
          id: req.params.dressingId
        }
      }); 

      if (!dressing) return res.status(404).json({ message: 'Not found!' });//404 - Not Found

      res.status(202).json(deleteDressing);
    } 
    catch (error) {
      res.status(500).json(error);//500 - internal server error
    };
  });
//#endregion

module.exports = router;