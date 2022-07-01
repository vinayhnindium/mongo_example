const mongoose = require('mongoose');

const schemaIndiumites = new mongoose.Schema({
  name: {
    type: String,
  },
  contact_number: {
    type: String,
  },
  desig: {
    type: String,
  },
});
module.exports = mongoose.model('schemaIndiumites', schemaIndiumites);
