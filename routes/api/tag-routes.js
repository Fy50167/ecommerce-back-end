const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll({
      include: [
        {model: Product, through: ProductTag, as: 'tagged_products'}
      ]
    });
    
    res.status(200).json(tagData);
  } catch {
    res.status(500).err(json);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [
        {model: Product, through: ProductTag, as: 'tagged_products'}
      ]
    });

    if (!tagData) {
      res.status(404).json({ message: 'No tag found with this id!' });
      return;
    }

    res.status(200).json(tagData);
  } catch {
    res.status(500).err(json);
  }
});

router.post('/', async (req, res) => {
  try {
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', (req, res) => {
  try {
    const tagData = Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(tagData);
  } catch {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const count = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!count) {
      res.status(404).json({ message: "No tag found with this id, couldn't delete!" });
      return;
    }

    res.status(200).json(count);
  } catch {
    res.status(500).err(json);
  }
});

module.exports = router;
