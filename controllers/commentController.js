const Comment = require('../models/commentModel.js')
const User = require('../models/userModel.js');
const Post = require('../models/postModel.js')
const mongoose = require('mongoose');


module.exports = {
    createComment,
    getComments,
    getCommentById,
    updateComment,
    deleteComment
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

// Get comments 
async function getComments(req, res) {
    try {
        const comments = await Comment.find({});

        res.status(200).json(comments);
    } catch (err) {
        res.status(400).send(err);
    }
}

// Get a single comment by ID
async function getCommentById(req, res, next) {
    try {
        const comment = await Comment.findById(req.params.id);
        res.status(200).json(comment);
    } catch (err) {
        next(err);
    }
}

// Update a single comment by ID
async function updateComment(req, res) {
    try {
        const updatedComment = await Comment.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });

        res.status(200).json(updatedComment);
    } catch (err) {
        res.status(400).send(err);
    }
}

// Delete a single comment by ID
async function deleteComment(req, res) {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({
            message: 'Invalid comment id',
        });
    }

    try {
        const comment = await Comment.findById(id);

        if (!comment) {
            return res.status(404).json({
                message: 'comment not found',
            });
        }

        await Comment.findByIdAndDelete(id);

        res.status(200).json({
            message: 'Successfully deleted the comment',
        });
    } catch (err) {
        res.status(500).send(err);
    }
}
