const { Router } = require('express');
const postsCtrl = require('../controllers/postController.js');

const router = Router();

router.post('/', postsCtrl.createPost);



module.exports = router;
