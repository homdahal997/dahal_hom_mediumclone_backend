const bcrypt = require('bcryptjs');
const User = require('../models/UserModel.js');

module.exports = {
  createUser,
  getUsers,
  updateUser,
  getUserById,
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

//Get all users
async function getUsers(req, res, next) {
  try {
    const users = await User.find({});

    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
}

// Get a single user by ID
async function getUserById(req, res,next) {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
}



// Update a single user by ID
async function updateUser(req, res, next) {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
}