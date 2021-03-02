const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const citySchema = new Schema({
  city: { 
    type: String, 
    require: true, 
    maxlength: 200 
  },
  posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
  img: { type: String }
});

const City = mongoose.model('City', citySchema);
module.exports = City;
