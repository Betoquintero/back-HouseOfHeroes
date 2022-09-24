const mongoose = require("mongoose");
const { Schema, model } = mongoose;
 
const readSchema = new Schema(
  {
    issueId: {
      type: String,     
    },
    userId: {
      type: String,     
    },
    read: {
      type: Boolean,
      default: true
    }
  },
  { 
    timestamps: true
  }
);

const Read = model('Read', readSchema);

module.exports = Read;