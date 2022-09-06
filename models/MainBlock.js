const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const mainBlockSchema = new Schema({
    universe: {
      type: String,      
      required: true
    },
    name: {
      type: String,
      required: true
    },
    order: {
      type: String,
      required: true
    },
    partOf: {
      type: String,      
    },
    years: {
      type: String,      
      },
    previousEvent: {
      type: String,        
      },
    nextEvent: {
      type: String,        
      },
    image: {
      type: String,        
      },
    complementaryImages: {
      type: String,        
      },
    type: {
      type: String,        
      }, 
    events: {
      type: [Schema.Types.ObjectId],
      ref: 'Event'
      },
    description: {
      type: String,        
      },
    summary: {
      type: String,        
      },
  },
    {
      timestamps: true
    });
  
  const MainBlock = model("MainBlock", mainBlockSchema);

  module.exports = MainBlock;

 
