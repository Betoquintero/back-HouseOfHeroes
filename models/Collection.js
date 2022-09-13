const mongoose = require("mongoose");
const { Schema, model } = mongoose;
 
const commentSchema = new Schema(
  {
    comment: {
      type: String,
      trim: true,
      required: [true, 'Comment is required.'],      
    },
    issue_Id: {
      type: Schema.Types.ObjectId, ref: "Issue",              
      },
    userId:{
      type: Schema.Type .ObjectId, ref: "User",
    },
  },
  {
    timestamps: true
  }
);

const Comment = model('Comment', commentSchema);

module.exports = Comment;