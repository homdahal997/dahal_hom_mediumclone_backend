const { Router } = require('express');
const commentsCtrl = require('../controllers/commentController.js');

const router = Router();

router.post('/', commentsCtrl.createComment);


module.exports = router;