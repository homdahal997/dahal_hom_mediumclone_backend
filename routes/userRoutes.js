const { Router } = require('express');
const usersCtrl = require('../controllers/userController.js');

const router = Router();

// Route for user registration
router.post('/register', usersCtrl.createUser);
router.get('/', usersCtrl.getUsers);

router.put('/:id', usersCtrl.updateUser);

module.exports = router;
