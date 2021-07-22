const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();
const Image = require('../../models/imageSchema');

// @route GET api/image
// @desc Get All Images
// @access Public
router.get('/', async (req, res) => {
  try {
    const find = await Image.find({});
    res.status(200).json(find);
  } catch (error) {
    res.status(500).send('Server Error');
    console.log(error.message);
  }
});

// @route POST api/image
// @desc Post New Image
// @access Public
router.post(
  '/',
  [
    check('image', 'Image link is required').not().isEmpty(),
    check('label', 'Label is required').not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { image, label } = req.body;
    try {
      const imagePost = new Image({
        image_link: image,
        label,
      });
      await imagePost.save();
      res.status(200).send(imagePost);
    } catch (error) {
      res.status(500).send('Server Error');
      console.log(error.message);
    }
  }
);

// @route DELETE api/image
// @desc Delete an Image
// @access Public
router.delete('/', async (req, res) => {
  try {
    const { id, password } = req.body;
    if (password !== 'nopasswordhere:)') {
      return res.status(400).send('Incorrect Password!');
    }
    const deleteOne = await Image.deleteOne({ _id: id });
    res.status(200).send('Image successfully deleted!');
  } catch (error) {
    res.status(500).send('Server Error');
    console.log(error.message);
  }
});

module.exports = router;
