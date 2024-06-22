const { Router } = require('express');
const postsCtrl = require('../controllers/postController.js');

const router = Router();

router.post('/', postsCtrl.createPost);
router.get('/', postsCtrl.getPosts);
router.get('/:id', postsCtrl.getPostById);
router.put('/:id', postsCtrl.updatePost);
router.delete('/:id', postsCtrl.deletePost);


module.exports = router;
