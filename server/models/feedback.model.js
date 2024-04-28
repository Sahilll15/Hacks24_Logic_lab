const mongoose = require('mongoose');

const FeedbackSchema = mongoose.Schema({
    
        rating: {
            type: Number,
            required: true
        },
    
        type: {
            type: String,
            enum: ['General', 'bug', 'feature'],
        default: 'General'
        },
    
        message: {
            type: String,
            required: true,
        },
        room: {
            type: mongoose.Schema.Types.ObjectId,
            // required: true,
            ref: 'Room'
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
    
    }, { timestamps: true });

const Feedback = mongoose.model('Feedback', FeedbackSchema);

module.exports = { Feedback };
