const Comment = require('../models/commentModel.js')
const User = require('../models/UserModel.js');
const Post = require('../models/postModel.js')
const mongoose = require('mongoose');


module.exports = {
    createComment,
};

async function createComment(req, res, next) {
    const { post, user, content } = req.body;

    try {
        // Check if the post exists
        const existingPost = await Post.findById(post);
        if (!existingPost) {
            return res.status(404).json({ message: 'Post not found' });
        }

        // Check if the user exists
        const existingUser = await User.findById(user);
        if (!existingUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Create a new comment
        const comment = new Comment({
            post,
            user,
            content
        });

        // Save the comment
        await comment.save();

        res.status(201).json(comment);
    } catch (err) {
        next(err);
    }
}
