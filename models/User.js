const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  hashedPassword: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  imageUrl:{
    type: String,
    default: 'https://res.cloudinary.com/dtxouyldc/image/upload/v1662643152/House%20of%20Heroes/Other%20images/default-user_mxs7o6.png'
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  }
},
  {
    timestamps: true
  });


const User = model ("User", userSchema)
  
module.exports = User


