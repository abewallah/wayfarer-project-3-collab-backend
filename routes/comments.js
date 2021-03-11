const router = require('express').Router();
const controllers = require('../controllers');

router.get('/', controllers.comments.index);
router.post('/', controllers.comments.create);
router.put('/:id', controllers.comments.update);
router.delete('/:id', controllers.comments.destroy);

module.exports = router;