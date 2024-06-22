const { Router } = require('express');
const usersCtrl = require('../controllers/userController.js');

const router = Router();

// Route for user registration
router.post('/register', usersCtrl.createUser);

module.exports = router;
