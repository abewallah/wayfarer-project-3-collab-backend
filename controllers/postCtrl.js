const db = require('../models');

const index = (req, res) => {
  db.Post.find({}, (err, allPosts) => {
    if (err) return console.log(err);
    res.json(allPosts);
  });
};

const show = (req, res) => {
  db.Post.findById(req.params.id).populate('comments').exec((err, post) => {
    if (err) console.log(err)
    res.json(post)
  })
}



// const show = (req, res) => {
//   db.Post.findById(req.params.id, (err, foundPost) => {
//     if (err) return console.log(err);
//     res.json(foundPost);
//   });
// };

const create = (req, res) => {
  console.log(req.body)
  const city = req.body.city;
  // console.log(city)

  const newPost = {
    title: req.body.title,
    author: req.body.author,
    body: req.body.body,
  };
  db.Post.create(newPost, (err, newPost) => {
    if (err) return console.log(err);

    db.City.findById(city, (err, foundCity) => {
      foundCity.posts.push(newPost._id);
      foundCity.save((err, savedCity) => {
        res.json(savedCity);
      });
    });
  });
};

const update = (req, res) => {
  db.Post.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedPost) => {
      if (err) return console.log(err);

      res.json(updatedPost);
    }
  );
};

const destroy = (req, res) => {
  db.Post.findByIdAndDelete(req.params.id, (err, deletedPost) => {
    if (err) return console.log(err);

    res.json(deletedPost);
  });
};

module.exports = {
  index,
  show,
  create,
  update,
  destroy,
};
