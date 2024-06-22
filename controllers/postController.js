const Post = require('../models/postModel')
const User = require('../models/UserModel.js');
const mongoose = require('mongoose');

module.exports = {
    createPost,
    getPosts,
    getPostById,
    updatePost,
    deletePost
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

// Get posts 
async function getPosts(req, res) {
    try {
        const posts = await Post.find({});

        res.status(200).json(posts);
    } catch (err) {
        res.status(400).send(err);
    }
}

// Get a single post by ID
async function getPostById(req, res, next) {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (err) {
        next(err);
    }
}

// Update a single posy by ID
async function updatePost(req, res) {
    try {
        const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });

        res.status(200).json(updatedPost);
    } catch (err) {
        res.status(400).send(err);
    }
}

// Delete a single post by ID
async function deletePost(req, res) {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({
            message: 'Invalid post id',
        });
    }

    try {
        const post = await Post.findById(id);

        if (!post) {
            return res.status(404).json({
                message: 'Post not found',
            });
        }

        await Post.findByIdAndDelete(id);

        res.status(200).json({
            message: 'Successfully deleted the post',
        });
    } catch (err) {
        res.status(500).send(err);
    }
}