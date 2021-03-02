const router = require('express').Router({ mergeParams: true });
const controllers = require('../controllers');


// Post Index
router.get('/', controllers.posts.index);

// Post Show
router.get('/:id', controllers.posts.show);

// Post Create
router.post('/', controllers.posts.create);

// Post Update
router.put('/:id', controllers.posts.update);

// Delete
router.delete('/:id', controllers.posts.destroy);

module.exports = router;

