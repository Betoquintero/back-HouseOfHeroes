const mongoose = require("mongoose");
const { Schema, model } = mongoose;
 
const commentSchema = new Schema(
  {
    comment: {
      type: String,
      trim: true,
      required: [true, 'Comment is required.'],      
    },
    item_Id: {
        type: String,              
      },
    userId:{
        type:String
    },
    userImage:{
         type:String,
    },
  },
  {
    timestamps: true
  }
);

const Comment = model('Comment', commentSchema);

module.exports = Comment;