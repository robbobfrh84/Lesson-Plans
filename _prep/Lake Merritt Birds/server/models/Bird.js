const mongoose = require('mongoose')

const BirdSchema = new mongoose.Schema({
  name: { type: String, required: true },
  species: { type: String, required: true },
  description: { type: String, required: true },
  habitat: { type: String, required: true },
  size: { type: String, required: true },
  diet: { type: String, required: true },
  image: { type: String } // link as a string.
});

module.exports = mongoose.model('Bird', BirdSchema)
