const router = require('express').Router();
const { 
  Categories, 
  Dressings, 
  MenuItems, 
  Pastas, 
  SaucesDesert, 
  ToppingsColdSub, 
  ToppingsDesert,
  ToppingsHotSub, 
  Hours
} = require('../../models');
/***** READ *****/
// Route to retrieve all categories and associated menu items
// Get method with endpoints '/api/menu'
router.get('/', async (req, res) => {
  try {
    const menu = await Categories.findAll({
      include: [{ model: MenuItems }]
    });

    res.status(200).json(menu);
  }
  catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});
router.get('/:menuitemsId', async (req, res) => {
  try {
    const menuItem = await MenuItems.findByPk(req.params.menuitemsId, {
      include: [
        { model: Categories },
        { model: Dressings },
        { model: Pastas }, 
        { model: SaucesDesert },
        { model: ToppingsColdSub },
        { model: ToppingsDesert },  
        { model: ToppingsHotSub },
      ]
    });
    res.status(200).json(menuItem);
  } 
  catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});
// Route to create new Category
// POST method with endpoint '/api/menu/newcategory'
router.post('/newcategory', async (req, res) => {
  try {
    const newCategory = await Categories.create({
      name: req.body.name,
      image: req.body.image
    });
    res.status(201).json(newCategory);
  } 
  catch (error) {
    console.log(error);
    res.status(500).json(error); // 500 - internal server error
  };
});
// Route to update a Category
// PUT method with endpoint '/api/menu/updateCategory/:categoryId'
router.put('/updateCategory/:categoryId', async (req, res) => {
  try {
    const updatedCategory = await Categories.update(req.body, {
      where: {
        id: req.params.categoryId
      },
    });
    if (!updatedCategory[0]) return res.status(404).json({ message: 'No category found.' }); // 404 - Not Found
    res.status(202).json(updatedCategory);
  } 
  catch (error) {
    console.log(error);
    res.status(500).json(error); // 500 - internal server error
  };
});
// Route to delete a Category
// DELETE method with endpoint '/api/menu/deleteCategory/:categoryId'
router.delete('/deleteCategory/:categoryId', async (req, res) => {
  try {
    const deletedCategory = await Categories.destroy({
      where: {
        id: req.params.categoryId
      },
    });
    if (!deletedCategory) return res.status(404).json({ message: 'No category found.' }); // 404 - Not Found
    res.status(202).json(deletedCategory);
  } 
  catch (error) {
    console.log(error);
    res.status(500).json(error); // 500 - internal server error
  };
});
/***** CREATE ******/
// Route to create new Menu Item
// POST method with endpoint '/api/menu/newitem'
router.post('/newitem', async (req, res) => {
  try {
    const newMenuItem = await MenuItems.create({
      name: req.body.name,
      description: req.body.description,
      categoryId: req.body.categoryId,
    });
    res.status(201).json(newMenuItem);
  } 
  catch (error) {
    console.log(error);
    res.status(500).json(error); // 500 - internal server error
  };
});
/***** UPDATE ******/
// Route to update a Menu Item
// PUT method with endpoint '/api/menu/updateMenuItem/:menuItemId'
router.put('/updateMenuItem/:menuItemId', async (req, res) => {
  try {
    const updatedMenuItem = await MenuItems.update(req.body, {
      where: {
        id: req.params.menuItemId
      },
    });
    if (!updatedMenuItem[0]) return res.status(404).json({ message: 'No menu item found.' }); // 404 - Not Found
    res.status(202).json(updatedMenuItem);
  } 
  catch (error) {
    console.log(error);
    res.status(500).json(error); // 500 - internal server error
  };
});
/***** DELETE ******/
// Route to delete a Menu Item
// DELETE method with endpoint '/api/menu/deleteMenuItem/:menuItemId'
router.delete('/deleteMenuItem/:menuItemId', async (req, res) => {
  try {
    const deletedMenuItem = await MenuItems.destroy({
      where: {
        id: req.params.menuItemId
      }
    });
    if (!deletedMenuItem) return res.status(404).json({ message: 'No menu item found.' }); // 404 - Not Found
    res.status(202).json(deletedMenuItem);
  } 
  catch (error) {
    console.log(error);
    res.status(500).json(error); // 500 - internal server error
  };
});
router.get('/hours', async (req, res) => {
  try {
    const menu = await Hours.findAll({
      include: [{ model: Hours }]
    });

    res.status(200).json(menu);
  }
  catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});
module.exports = router;