const mongoose = require('mongoose');


const roomModel = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    status: {
        type: String,
        required: true,
        default: 'pending',
        enum: ['pending', 'accepted', 'rejected']
    },
    images: {
        type: Array,
        default: []
    },
    task: [
        {
            type: String,

        }
    ],
    budget: {
        type: Number,
        required: true
    },


});


const Room = mongoose.model('Room', roomModel);

module.exports = { Room };