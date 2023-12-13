const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const readStatusSchema = new Schema({
    userId: {
      type: Schema.Types.ObjectId, 
      ref: 'User',
      required: true
    },
    issueId: {
      type: Schema.Types.ObjectId, 
      ref: 'Issue',
      required: true
    },
    isRead: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  });
  
  const ReadStatus = model('ReadStatus', readStatusSchema);
  
  module.exports = ReadStatus;
  