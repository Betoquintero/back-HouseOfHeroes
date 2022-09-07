const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const partSchema = new Schema({
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
    },
    years: {
      type: String,      
      },
    events: {
      type: [Schema.Types.ObjectId],
      ref: 'Event'
      },
    issues: {
      type: [Schema.Types.ObjectId],
      ref: 'Issue'
      },

    description: {
      type: String,        
      },
  },
    {
      timestamps: true
    });
  
  const Part = model("Part", partSchema);

  module.exports = Part;

 
