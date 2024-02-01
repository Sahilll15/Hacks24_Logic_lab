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
    tasks: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Task'
        }
    ],
    budget: {
        type: Number,
        // required: true
        required: false,
        default: 0
    },
    project: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Project'
    }


});


const Room = mongoose.model('Room', roomModel);

module.exports = { Room };