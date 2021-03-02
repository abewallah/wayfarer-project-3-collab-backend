const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const postSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true, 
    minlength: 1,
    maxlength: 200},
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  img: { type: String },
  body: { 
    type: String, 
    required: true, 
    trim: true 
  },
  city: { 
    type: Schema.Types.ObjectId, 
    ref: 'City' 
  },
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
},{timestamps: true});

const Post = mongoose.model('Post', postSchema);
module.exports = Post;
