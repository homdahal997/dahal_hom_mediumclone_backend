const { Schema, model } = require('mongoose');

const postSchema = Schema({
    title: { 
        type: String, 
        required: true 
    },
    content: { 
        type: String, 
        required: true 
    },
    user: { 
        type: Schema.Types.ObjectId, 
        required: true, 
        ref: 'User' 
    },
    timestamp: { 
        type: Date, 
        default: Date.now 
    },
    image_url: { 
        type: String 
    }
},
{ versionKey: false });

postSchema.index({ title: 1 });

module.exports = model('Post', postSchema);