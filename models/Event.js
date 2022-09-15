const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const eventSchema = new Schema({
    universe: {
      type: String,      
    },
    name: {
      type: String,      
    },
    order: {
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
    issues: {
      type: [Schema.Types.ObjectId],
      ref: 'Issue'
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
  
  const Event = model("Event", eventSchema);

  module.exports = Event;