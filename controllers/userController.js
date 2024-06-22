const bcrypt = require('bcryptjs');
const User = require('../models/UserModel.js');

module.exports = {
  createUser,
};

async function createUser(req, res, next) {
  try {
    // Hash the password before saving the user
    const salt = 10;
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // Create a new user with the hashed password
    const newUser = {
      name: req.body.username, 
      email: req.body.email,
      password: req.body.password, 
      isAdmin: req.body.isAdmin || false,
    };
    const user = await User.create(newUser);
    //await user.save();

    res.status(200).json(user);
  } catch (err) {
    next(err)
  }
}
