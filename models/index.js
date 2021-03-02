const mongoose = require('mongoose')
const connectionString = 'mongodb://localhost:27017/wayfarer';

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.log(err));

module.exports = {
  City: require('./City'),
  Post: require('./Post'),
  User: require('./User'),
  Comment: require('./Comment '),
  secretOrKey: 'secret',
}

