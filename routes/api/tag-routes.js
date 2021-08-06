const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  let tagData = await Tag.findAll({
    include: [
      {
        model: Product,
        through: ProductTag,
        as: 'products'
      }
    ]
  });

  res.json(tagData);
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  let tagData = await Tag.findByPk(req.params.id, {
    include: [
      {
        model: Product,
        through: ProductTag,
        as: 'products'
      }
    ]
  });

  res.json(tagData);
});

// create a new tag
router.post('/', (req, res) => {

  Tag.create(req.body).then((newTag) => {

    res.json(newTag);
  }).catch((err) => {

    res.json(err);
  });
});

// update a tag's name by its `id` value
router.put('/:id', (req, res) => {

  Tag.update(
    {
      // Update the tag's name
      tag_name: req.body.tag_name,
    },
    {
      // Get the tag based on id
      returning: true,
      where: {
        id: req.params.id,
      },
    }
  ).then(([rows, [updatedTag]]) => {

      // Sends the updated tag as a json response
      res.json(updatedTag);
  }).catch((err) => res.json(err));
});

// delete on tag by its `id` value
router.delete('/:id', (req, res) => {
  
  Tag.destroy({

    where: {
      id: req.params.id,
    },
  }).then((deletedTag) => {

    res.json(deletedTag);
  }).catch((err) => res.json(err));
});

module.exports = router;
