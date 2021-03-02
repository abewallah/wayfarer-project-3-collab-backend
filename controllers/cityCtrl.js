const db = require('../models');

// const index = (req, res) => {
//   db.City.find({}, (err, cities) => {
//     if (err) return console.log(err);
//     res.json(cities);
//   });
// };

const index = (req, res) => {
  db.City.find({}).populate('posts').exec((err, cities) => {
    if (err) return console.log(err);
    res.json(cities);
  })
}

const show = (req, res) => {
  db.City.findById(req.params.id, (err, foundCity) => {
    if (err) return console.log(err);
    res.json(foundCity);
  });
};



module.exports = {
  index,
  show,
};
