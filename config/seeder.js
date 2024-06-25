// Require connection file to connect
const mongoose = require('./db-connection.js');
const bcrypt = require('bcryptjs');
// Require Models for delete and create operations
const User = require('../models/userModel.js');
const Post = require('../models/postModel.js');
const Comment = require('../models/commentModel.js')


// Define users data
const users = [
    {
        name: 'John Doe',
        email: 'john@example.com',
        password: bcrypt.hashSync('password123', 10),
        isAdmin: true,
    },
    {
        name: 'Jane Smith',
        email: 'jane@example.com',
        password: bcrypt.hashSync('password456', 10),
        isAdmin: false,
    },
    {
        name: 'Alice Johnson',
        email: 'alice@example.com',
        password: bcrypt.hashSync('password789', 10),
        isAdmin: false,
    },
    {
        name: 'Bob Brown',
        email: 'bob@example.com',
        password: bcrypt.hashSync('password101', 10),
        isAdmin: true,
    },
    {
        name: 'Charlie Davis',
        email: 'charlie@example.com',
        password: bcrypt.hashSync('password102', 10),
        isAdmin: false,
    },
    {
        name: 'Eve Evans',
        email: 'eve@example.com',
        password: bcrypt.hashSync('password103', 10),
        isAdmin: true,
    },
    {
        name: 'Frank Foster',
        email: 'frank@example.com',
        password: bcrypt.hashSync('password104', 10),
        isAdmin: false,
    },
    {
        name: 'Grace Green',
        email: 'grace@example.com',
        password: bcrypt.hashSync('password105', 10),
        isAdmin: true,
    },
    {
        name: 'Hank Harris',
        email: 'hank@example.com',
        password: bcrypt.hashSync('password106', 10),
        isAdmin: false,
    },
    {
        name: 'Ivy Irving',
        email: 'ivy@example.com',
        password: bcrypt.hashSync('password107', 10),
        isAdmin: true,
    },
];

// Define posts data
const posts = [
    {
        title: 'First Post',
        content: 'This is the content of the first post',
        user: createdUsers[0]._id,
        image_url: 'http://example.com/image1.jpg',
    },
    {
        title: 'Second Post',
        content: 'This is the content of the second post',
        user: createdUsers[1]._id,
        image_url: 'http://example.com/image2.jpg',
    },
    {
        title: 'Third Post',
        content: 'This is the content of the third post',
        user: createdUsers[2]._id,
        image_url: 'http://example.com/image3.jpg',
    },
    {
        title: 'Fourth Post',
        content: 'This is the content of the fourth post',
        user: createdUsers[3]._id,
        image_url: 'http://example.com/image4.jpg',
    },
    {
        title: 'Fifth Post',
        content: 'This is the content of the fifth post',
        user: createdUsers[4]._id,
        image_url: 'http://example.com/image5.jpg',
    },
    {
        title: 'Sixth Post',
        content: 'This is the content of the sixth post',
        user: createdUsers[5]._id,
        image_url: 'http://example.com/image6.jpg',
    },
    {
        title: 'Seventh Post',
        content: 'This is the content of the seventh post',
        user: createdUsers[6]._id,
        image_url: 'http://example.com/image7.jpg',
    },
    {
        title: 'Eighth Post',
        content: 'This is the content of the eighth post',
        user: createdUsers[7]._id,
        image_url: 'http://example.com/image8.jpg',
    },
    {
        title: 'Ninth Post',
        content: 'This is the content of the ninth post',
        user: createdUsers[8]._id,
        image_url: 'http://example.com/image9.jpg',
    },
    {
        title: 'Tenth Post',
        content: 'This is the content of the tenth post',
        user: createdUsers[9]._id,
        image_url: 'http://example.com/image10.jpg',
    },
];

// Define comments data
const comments = [
    {
        post: createdPosts[0]._id,
        user: createdUsers[0]._id,
        content: 'This is a comment on the first post',
    },
    {
        post: createdPosts[1]._id,
        user: createdUsers[1]._id,
        content: 'This is a comment on the second post',
    },
    {
        post: createdPosts[2]._id,
        user: createdUsers[2]._id,
        content: 'This is a comment on the third post',
    },
    {
        post: createdPosts[3]._id,
        user: createdUsers[3]._id,
        content: 'This is a comment on the fourth post',
    },
    {
        post: createdPosts[4]._id,
        user: createdUsers[4]._id,
        content: 'This is a comment on the fifth post',
    },
    {
        post: createdPosts[5]._id,
        user: createdUsers[5]._id,
        content: 'This is a comment on the sixth post',
    },
    {
        post: createdPosts[6]._id,
        user: createdUsers[6]._id,
        content: 'This is a comment on the seventh post',
    },
    {
        post: createdPosts[7]._id,
        user: createdUsers[7]._id,
        content: 'This is a comment on the eighth post',
    },
    {
        post: createdPosts[8]._id,
        user: createdUsers[8]._id,
        content: 'This is a comment on the ninth post',
    },
    {
        post: createdPosts[9]._id,
        user: createdUsers[9]._id,
        content: 'This is a comment on the tenth post',
    },
];

async function seed() {
    try {
        await Post.deleteMany({});
        await User.deleteMany({});
        await Comment.deleteMany({});

        const createdUsers = await User.create(users);
        console.log('Users: ', createdUsers);

        const createdPosts = await Post.create(posts);
        console.log('Posts: ', createdPosts);

        const createdComments = await Comment.create(comments);
        console.log('Posts: ', createdComments);
        await mongoose.connection.close();
    } catch (err) {
        console.log(err);
    }
}

seed();