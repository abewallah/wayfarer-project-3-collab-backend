const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    body: {
      type: String,
      minlength: 1,
      maxlength: 1000,
      required: true,
    },
    created_at: {
      type: Date,
      required: true,
      default: Date.now,
    },
    // author: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'User',
    // },
  },
  { timestamps: true }
);

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;
