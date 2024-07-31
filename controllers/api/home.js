const router = require('express').Router();
const {
  HomePage
} = require('../../models');
/***** CREATE ******/
/***** READ ******/
// Route to retrieve all HomePage
// GET method with endpoint '/api/home'
router.get('/', async (req, res) => {
  try {
    const allHome = await HomePage.findAll();
    res.status(200).json(allHome);
  } 
  catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});
// Route to retrieve a single Home
// GET method with endpoint '/api/home/:homeId'
router.get('/:homeId', async (req, res) => {
  try {
    const home = await HomePage.findByPk(req.params.homeId);
    res.status(200).json(home);
  } 
  catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});
/***** UPDATE ******/
// Router to update single home page
// POST method with endpoint '/api/home/updateHomePage/:homeId'
router.put('/updateHome/:homeId', async (req, res) => {
  try {
    const updateHomePage = await HomePage.update(req.body, {
      where: {
        id: req.params.homeId
      }
    });
    if (!updateHomePage[0]) return res.status(404).json({ message: 'No Home Page found' }); // 404 - Not Found
    res.status(202).json(updateHomePage);
  }
  catch (error) {
    console.log(error);
    res.status(500).json(error); // 500 - internal server error
  }
});
/***** DELETE ******/
module.exports = router;