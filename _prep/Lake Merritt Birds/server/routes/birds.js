const express = require('express')
const router = express.Router()
const Bird = require('../models/Bird')

// * Get all birds
router.get('/', async (req, res) => {
  try {
    const birds = await Bird.find()
    res.json(birds)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
});

// * Get a single bird by ID (Example (copy _id from "/api/birds/"): http://localhost:3000/api/birds/67dc23d3426e27a25e0042cc)
router.get('/:id', getBird, (req, res) => {
  res.json(res.bird)
})

// Create a new bird
router.post('/', async (req, res) => {
  const { name, species, description, habitat, size, diet, image } = req.body
  const bird = new Bird({ name, species, description, habitat, size, diet, image });
  try {
    const newBird = await bird.save();
    res.status(201).json(newBird);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a bird
router.put('/:id', getBird, async (req, res) => {
  const { name, species, description, habitat, size, diet, image } = req.body;
  if (name != null) res.bird.name = name;
  if (species != null) res.bird.species = species;
  if (description != null) res.bird.description = description;
  if (habitat != null) res.bird.habitat = habitat;
  if (size != null) res.bird.size = size;
  if (diet != null) res.bird.diet = diet;
  if (image != null) res.bird.image = image;
  
  try {
    const updatedBird = await res.bird.save();
    res.json(updatedBird);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a bird
router.delete('/:id', getBird, async (req, res) => {
  try {
    await res.bird.remove();
    res.json({ message: 'Bird deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware to retrieve bird by ID
async function getBird(req, res, next) {
  let bird;
  try {
    bird = await Bird.findById(req.params.id);
    if (bird == null) {
      return res.status(404).json({ message: 'Bird not found' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.bird = bird;
  next();
}

module.exports = router;
