const router = require('express').Router();
const {
  Location
} = require('../../models');
/***** CREATE ******/
/***** READ ******/
// Route to retrieve all Location
// GET method with endpoint '/api/location'
router.get('/', async (req, res) => {
  try {
    const allLocation = await Location.findAll();
    res.status(200).json(allLocation);
  }
  catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});
// Route to retrieve a single Location
// GET method with endpoint 'api/location/:locationId'
router.get('/:locationId', async (req, res) => {
  try {
    const location = await Location.findByPk(req.params.locationId);
    res.status(200).json(location);  
  } 
  catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
})
/***** UPDATE ******/
/***** DELETE ******/
module.exports = router;