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
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
      type: req.body.type
    };
    const user = await User.create(newUser);
    //await user.save();

    res.status(200).json(user);
  } catch (err) {
    next(err)
  }
}
