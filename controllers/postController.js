const Post = require('../models/postModel')
const User = require('../models/UserModel.js');
const mongoose = require('mongoose');

module.exports = {
    createPost,
};

// Create post 
async function createPost(req, res, next) {
    const { title, content, user, timestamp, image_url } = req.body;

    try {
        // Check if the user exists
        const existingUser = await User.findById(user);
        if (!existingUser) {
            return res.status(400).json({ message: 'User does not exist' });
        }

        // Create a new post
        const post = new Post({
            title,
            content,
            user,
            timestamp,
            image_url
        });

        // Save the post
        await post.save();

        res.status(201).json(post);
    } catch (err) {
        next(err);
    }
}
