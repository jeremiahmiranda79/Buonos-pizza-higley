const router = require('express').Router();
const { 
  Information 
} = require('../../models');
/***** CREATE ******/
/***** READ ******/
// Route to retrieve all Information
// GET method with endpoint '/api/information'
router.get('/', async (req, res) => {
  try {
    const allInformation = await Information.findAll();
    res.status(200).json(allInformation);
  }
  catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});
// Route to retrieve a single Information
// GET method with endpoint '/api/information/:infoId'
router.get('/:infoId', async (req, res) => {
  try {
    const info = await Information.findByPk(req.params.infoId);
    res.status(200).json(info);
  }
  catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});
/***** UPDATE ******/
// Route to update a single information
// POST method with endpoint '/api/information/updateInformation/:infoId'
router.put('/updateInformation/:infoId', async (req, res) => {
  try {
    const updateInfo = await Information.update(req.body, {
      where: {
        id: req.params.infoId
      }
    });
    if (!updateInfo[0]) return res.status(404).json({ message: 'No information found.' }); // 404 - Not Found
    res.status(202).json(updateInfo);
  } 
  catch (error) {
    console.log(error);
    res.status(500).json(error); // 500 - internal server error
  }
}); 
/***** DELETE ******/
// Route to delete an Informtion
// DELETE method with endpoint '/api/'information/deleteInformation/:infoId'
router.delete('/deleteInformation/:infoId', async (req, res) => {
  try {
    const deleteInformation = await Information.destroy({
      where: {
        id: req.params.infoId
      }
    });
    if (!deleteInformation) return res.status(404).json({ message: 'No information found.' }); // 404 - Not Found
    res.status(202).json(deleteInformation);
  }
  catch (error) {
    console.log(error);
    res.status(500).json(error); // 500 - internal server error
  };
});
module.exports = router;