const router = require('express').Router();
const { SaucePasta } = require('../../models');
//#region /***** CREATE ******/
  //Route to create new sauce pasta
  //Post method with endpoint '/api/saucePasta/createSaucePasta'
  router.post('/createSaucePasta', async (req, res) => {
    try {
      const newSaucePasta = await SaucePasta.create({
        name: req.body.name,
        price3oz: req.body.price3oz,
        price16oz: req.body.price16oz
      });
      res.status(201).json(newSaucePasta);
    } 
    catch (error) {
      console.log(error);
      res.status(500).json(error);//500 - internal server error
    };
  });
//#endregion
//#region /***** READ ******/
  // Route to retireve all sauce pasta
  // GET method with endpoint '/api/saucePasta'
  router.get('/', async (req, res) => {
    try {
      const allSaucePasta = await SaucePasta.findAll();
      res.status(200).json(allSaucePasta);
    } 
    catch (error) {
      console.log(error);
      res.status(500).json(error);//500 - internal server error
    };
  });
  // Route to retireve a single sauce pasta
  // GET method with endpoint '/api/saucePasta/:saucePastaId'
  router.get('/:saucePastaId', async (req, res) => {
    try {
      const saucePasta = await SaucePasta.findByPk(req.params.saucePastaId);
      res.status(200).json(saucePasta);
    } 
    catch (error) {
      console.log(error);
      res.status(500).json(error);//500 - internal server error
    };
  });
//#endregion
//#region /***** UPDATE ******/
  //Route to update a single sauce pasta
  //POST method with endpoint '/api/saucePasta/updateSaucePasta/:saucePastaId'
  router.put('/updateSaucePasta/:saucePastaId', async (req, res) => { 
    try {
      const updateSaucePasta = await SaucePasta.update(req.body, {
        where: {
          id: req.params.saucePastaId
        }
      });
      if (!updateSaucePasta[0]) return res.status(404).json({ message: 'Not found!' });//404 - Not Found
      res.status(202).json(updateSaucePasta);
    } 
    catch (error) {
      console.log(error);
      res.status(500).json(error);//500 - internal server error
    }
  });
//#endregion
//#region /***** DELETE ******/
  //Route to delete a single sauce pasta
  //DELETE method with endpoint '/api/saucePasta/deleteSaucePasta/:saucePastaId'
  router.delete('/deleteSaucePasta/:saucePastaId', async (req, res) => {
    try {
      const deleteSaucePasta = await SaucePasta.destroy({
        where: {
          id: req.params.saucePastaId
        }
      });
      if (!deleteSaucePasta) return res.status(404).json({ message: 'Not found!' });//404 - Not Found
      res.status(202).json(deleteSaucePasta);
    }
    catch (error) {
      console.log(error);
      res.status(500).json(error);//500 - internal server error
    };
  });
//#endregion
module.exports = router;