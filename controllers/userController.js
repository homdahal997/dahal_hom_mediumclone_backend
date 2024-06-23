const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/UserModel.js');

module.exports = {
  createUser,
  loginUser,
  getUsers,
  updateUser,
  getUserById,
  deleteUser,
  getUserProfile,
  updateUserProfile,
  logoutUser,
};

async function createUser(req, res, next) {
  try {
    // Hash the password before saving the user
    const { username, email, password, isAdmin } = req.body;
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // Create a new user with the hashed password
    const newUser = {
      name: req.body.username, 
      email: req.body.email,
      password: req.body.password, 
      isAdmin: req.body.isAdmin || false,
    };
    const user = await User.create(newUser);
    
    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: JWT_EXPIRE });

    res.status(201).json({ user, token });
  } catch (err) {
    next(err)
  }
}

async function loginUser(req, res, next) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: JWT_EXPIRE });
      res.status(200).json({ user, token });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (err) {
    next(err);
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

// Delete a single user by ID
async function deleteUser(req, res, next) {
  try {
    const user = await User.findByIdAndDelete(req.params._id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'User deleted successfully' });
  } catch (err) {
    next(err);
  }
}

async function getUserProfile(req, res, next) {
  try {
    const user = await User.findById(req.user._id).select('-password'); // Exclude password from the result
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
}

// Update the profile of the currently authenticated user
async function updateUserProfile(req, res, next) {
  try {
    // Allow updates to name and email only for simplicity
    const updates = {
      name: req.body.name,
      email: req.body.email,
    };

    // req.user.id is set from the authentication middleware
    const user = await User.findByIdAndUpdate(req.user.id, updates, {
      new: true,
      runValidators: true,
    }).select('-password'); // Exclude password from the result

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
}

// logout user 
async function logoutUser(req, res){
  res.clearCookie('jwt');
  res.status(200).json({ message: 'Logged out successfully' });
};