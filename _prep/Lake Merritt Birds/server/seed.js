const mongoose = require('mongoose')
const Bird = require('./models/Bird')

const userCommand = process.argv[2]
console.log('userCommand:',userCommand)

mongoose.connect('mongodb://localhost:27017/lake_merritt_birds', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected for seeding'))
  .catch(err => console.error(err))

if (userCommand === "all") {
  Bird.deleteMany({})
    .then(() => Bird.insertMany(seedBirds))
    .then(() => {
      console.log('Database seeded!')
      mongoose.connection.close()
    })
    .catch(err => {
      console.error(err)
      mongoose.connection.close()
    });
} else if (userCommand === "delete") {
  Bird.deleteMany({})
    .then(() => {
      console.log('Database Deleted!')
      mongoose.connection.close()
    })
} else {
  console.log("\n ⚠️  Try adding command, like... `npm run seed all`\n")
}

const seedBirds = [
  {
    name: 'Northern Flicker',
    species: 'Colaptes auratus',
    description: 'A type of woodpecker with spotted plumage.',
    habitat: 'Woodlands and suburban areas',
    size: 'Medium',
    diet: 'Insects, fruits, nuts',
    image: 'https://www.fws.gov/sites/default/files/styles/scale_width_1200/public/images/2024-03/northern-flicker-female.jpg.webp?itok=c2B14Frn'
  },
  {
    name: 'Anna\'s Hummingbird',
    species: 'Calypte anna',
    description: 'A small hummingbird known for its iridescent feathers.',
    habitat: 'Gardens and open woodlands',
    size: 'Small',
    diet: 'Nectar, small insects',
    image: ''
  },
  {
    name: 'California Quail',
    species: 'Callipepla californica',
    description: 'A ground-dwelling bird with a distinctive topknot.',
    habitat: 'Chaparral and coastal scrub',
    size: 'Small-medium',
    diet: 'Seeds, insects',
    image: ''
  }
]