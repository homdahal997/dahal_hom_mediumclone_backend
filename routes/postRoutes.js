const { Router } = require('express');
const postsCtrl = require('../controllers/postController.js');

const router = Router();

router.post('/', postsCtrl.createPost);
router.get('/', postsCtrl.getPosts);
router.get('/:id', postsCtrl.getPostById);


module.exports = router;
