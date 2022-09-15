const mongoose = require("mongoose");
const { Schema, model } = mongoose;
 
const collectionSchema = new Schema(
  {
    userId: {
      type: String,     
    },
    issues: {
      type: [Schema.Types.ObjectId], ref: "Issue",              
      },
    events:{
      type: [Schema.Types.ObjectId], ref: "Event",
    },
  },
  { 
    timestamps: true
  }
);

const Colection = model('Collection', collectionSchema);

module.exports = Colection;