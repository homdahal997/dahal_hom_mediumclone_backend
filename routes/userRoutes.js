const { Router } = require('express');
const usersCtrl = require('../controllers/userController.js');

const router = Router();

// Route for user registration
router.post('/register', usersCtrl.createUser);
router.post('/login', usersCtrl.loginUser);
router.get('/', usersCtrl.getUsers);
router.get('/:id', usersCtrl.getUserById);
router.put('/:id', usersCtrl.updateUser);
router.delete('/:id', usersCtrl.deleteUser);
router.get('/profile', usersCtrl.getUserProfile);
router.put('/profile', usersCtrl.updateUserProfile);

module.exports = router;
