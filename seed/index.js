require('dotenv').config();
const mongoose = require('mongoose');
const Issue = require ('../models/Issue');
// Import the model

// Place the array you want to seed
const issues = [
  {
    //Batman: A Lonely Place of Dying 
    "universe":"DC",
    "name": "Batman #440",
    "order":"1",           
    "years": "1989",            
    "image": "https://res.cloudinary.com/dtxouyldc/image/upload/v1662544300/House%20of%20Heroes/DC/Events/Batman:%20A%20Lonely%20Place%20of%20Dying/batman_440_knbj0t.jpg",
    "complementaryImages": "",
    "description": "'A Lonely Place of Dying' part 1! Batman pushes the limits following Jason Todd's death. Meanwhile, a mysterious individual stalks Batman and Nightwing. Continued in The New Titans (1988-1996) #60. Batman continues to act in an uncontrolled and undisciplined manner, unaware that Two-Face is trying to have him killed, or that someone has been tailing him and taking photos. This same someone attempts to find Dick Grayson, and hearing that Haly's Circus is closing, assumes that this will be Dick's destination.",             
  }
]


mongoose.connect(process.env.MONGO_URL)
  .then(x => console.log(`Connected to ${x.connection.name}`))
  .then(() => {
    return Issue.create(issues)
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