const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  let catData = await Category.findAll({
    include: [
      {
        model: Product,
      }
    ]
  });

  res.json(catData);
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  let catData = await Category.findByPk(req.params.id, {
    include: [
      {
        model: Product,
      }
    ]
  });

  res.json(catData);
});

// create a new category
router.post('/', (req, res) => {
  
  Category.create(req.body).then((newCat) => {

    res.json(newCat);
  }).catch((err) => {
    
    res.json(err);
  });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

// delete a category by its `id` value
router.delete('/:id', (req, res) => {
  
  Category.destroy({

    where: {
      id: req.params.id,
    },
  }).then((deletedCat) => {

    res.json(deletedCat);
  }).catch((err) => res.json(err));
});

module.exports = router;
