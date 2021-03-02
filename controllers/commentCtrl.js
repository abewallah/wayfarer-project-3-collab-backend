const db = require('../models');

const index = (req, res) => {
  db.Comment.find({}, (err, allComments) => {
    if (err) return console.log(err);
    res.json(allComments);
  });
};

const create = (req, res) => {
  console.log(req.body)
  const post = req.body.post;

  const newComment = {
    // author: req.body.author,
    body: req.body.body,
  };
  db.Comment.create(newComment, (err, newComment) => {
    if (err) return console.log(err);

    db.Post.findById(post, (err, foundPost) => {
      foundPost.comments.push(newComment._id);
      foundPost.save((err, savedPost) => {
        if (err) console.log(err);
        res.json(savedPost);
      });
    });
  });
};

const update = (req, res) => {
  db.Comment.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedComment) => {
      if (err) return console.log(err);

      res.json(updatedComment);
    }
  );
};

const destroy = (req, res) => {
  db.Comment.findByIdAndDelete(req.params.id, (err, deletedComment) => {
    if (err) return console.log(err);

    res.json(deletedComment);
  });
};

module.exports = {
  index,
  create,
  update,
  destroy,
};
