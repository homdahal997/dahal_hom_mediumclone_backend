const { Schema, model } = require('mongoose');

const commentSchema = Schema({
    post: { 
        type: Schema.Types.ObjectId, 
        required: true, 
        ref: 'Post' 
    },
    user: { 
        type: Schema.Types.ObjectId, 
        required: true, 
        ref: 'User' 
    },
    content: { 
        type: String, 
        required: true 
    },
    timestamp: { 
        type: Date, 
        default: Date.now 
    }
},
{ versionKey: false });

commentSchema.index({ content: 1 });

module.exports = model('Comment', commentSchema);