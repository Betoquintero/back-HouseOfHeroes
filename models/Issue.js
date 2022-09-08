const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const issueSchema = new Schema({
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
    partOf: {
      type: String,      
    },
    years: {
      type: String,      
      },
    image: {
      type: String,        
      },
    complementaryImages: {
      type: String,        
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
  
  const Issue = model("Issue", issueSchema);

  module.exports = Issue;