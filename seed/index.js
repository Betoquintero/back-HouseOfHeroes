require('dotenv').config();
const mongoose = require('mongoose');
const Event = require ('../models/Event');
// Import the model

// Place the array you want to seed
const events = [

]


mongoose.connect(process.env.MONGO_URL)
  .then(x => console.log(`Connected to ${x.connection.name}`))
  .then(() => {
    return Event.create(events)
  })
  .then(() => {
    console.log('Seed done 🌱');
  })
  .catch(e => console.log(e))
  .finally(() => {
    console.log('Closing connection');
    mongoose.connection.close();
  })

// Run npm run seed 