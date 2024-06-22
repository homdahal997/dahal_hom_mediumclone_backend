const { Router } = require('express');
const commentsCtrl = require('../controllers/commentController.js');

const router = Router();

router.post('/', commentsCtrl.createComment);
router.get('/', commentsCtrl.getComments);
router.get('/:id', commentsCtrl.getCommentById);

module.exports = router;