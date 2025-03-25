const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const birdsRouter = require('./routes/birds')

const app = express()
const PORT = process.env.PORT || 3000

// * Middleware
app.use(express.json())
app.use(cors())

// * Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/lake_merritt_birds', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err))

// * API Routes
app.use('/api/birds', birdsRouter)
app.use('/info', async (req, res) => {
  try {
    res.status(200).json({ 
      message: "Oh, Hi! Info API!", 
      get_all_birds: req.protocol + '://' + req.get('host') + "/api/birds"
    })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// * Start Backend server...
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
