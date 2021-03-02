const router = require('express').Router();
const controllers = require('../controllers');

// Post Index
router.get('/', controllers.cities.index);

// Post Show
router.get('/:id', controllers.cities.show);

// Post Create
// router.post('/', controllers.cities.create);

// // Post Update
// router.put('/:id', controllers.cities.update);

// // Delete
// router.delete('/:id', controllers.cities.destroy);

module.exports = router;
