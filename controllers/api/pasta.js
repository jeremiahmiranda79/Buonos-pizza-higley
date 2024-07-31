const router = require('express').Router();
const { Pastas } = require('../../models')
//#region /***** CREATE ******/
  //Route to create new pasta
  //Post method with endpoint '/api/pasta/createPasta'
  router.post('/createPasta', async (req, res) => {
    try {
      const newPasta = await Pastas.create({
        name: req.body.name,
        price5oz: req.body.price5oz,
        price9oz: req.body.price9oz
      });
      res.status(201).json(newPasta);
    } 
    catch (error) {
      console.log(error);
      res.status(500).json(error);//500 - internal server error
    };
  });
//#endregion
//#region /***** READ ******/
  //Route to retrieve all pastas
  //GET method with endpoint '/api/pasta'
  router.get('/', async (req, res) => {
    try {
      const allPasta = await Pastas.findAll();
      res.status(200).json(allPasta);
    }
    catch (error) {
      console.log(error);
      res.status(500).json(error);//500 - internal server error
    }
  });
  //Route to retrieve a single pasta
  //GET method with endpoint '/api/pasta/:pastaId'
  router.get('/:pastaId', async (req, res) => {
    try {
      const pasta = await Pastas.findByPk(req.params.pastaId);
      res.status(200).json(pasta);
    } 
    catch (error) {
      console.log(error);
      res.status(500).json(error);//500 - internal server error
    }
  });
//#endregion
//#region /***** UPDATE ******/
  //Route to update a single pasta
  //POST method with endpoint '/api/pasta/updatePasta/:pastaId'
  router.put('/updatePasta/:pastaId', async (req, res) => { 
    try {
      const updatePasta = await Pastas.update(req.body, {
        where: {
          id: req.params.pastaId
        }
      });
      if (!updatePasta[0]) return res.status(404).json({ message: 'Not found!' });//404 - Not Found
      res.status(202).json(updatePasta);
    } 
    catch (error) {
      console.log(error);
      res.status(500).json(error);//500 - internal server error
    }
  });
//#endregion
//#region /***** DELETE ******/
  //Route to delete a single pasta
  //DELETE method with endpoint '/api/pasta/deletePasta/:pastaId'
  router.delete('/deletePasta/:pastaId', async (req, res) => {
    try {
      const deletePasta = await Pastas.destroy({
        where: {
          id: req.params.pastaId
        }
      });
      if (!deletePasta) return res.status(404).json({ message: 'Not found!' });//404 - Not Found
      res.status(202).json(deletePasta);
    }
    catch (error) {
      console.log(error);
      res.status(500).json(error);//500 - internal server error
    };
  });
//#endregion
module.exports = router;