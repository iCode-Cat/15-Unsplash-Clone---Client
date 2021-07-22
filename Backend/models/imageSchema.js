const mongoose = require('mongoose');
const moment = require('moment');

const imageSchema = new mongoose.Schema({
  label: {
    type: String,
    required: true,
  },
  image_link: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    default: () => moment().format('DD/MM/HH:mm A'),
  },
});

module.exports = Image = mongoose.model('image', imageSchema);
