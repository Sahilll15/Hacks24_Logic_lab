const mongoose = require('mongoose');


const taskModel = new mongoose.Schema({

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
    budget: {
        type: Number,
        required: true
    },
    room: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Room'
    },
    project: {
        type: mongoose.Schema.Types.ObjectId,
        // required: true,
        ref: 'Project',
        required: true
    },
    contractor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Contractor',
        // required: true``
    },

    contractorAcceptedTask: {
        type: Boolean,
        default: false
    },


});


const Task = mongoose.model('Task', taskModel);

module.exports = { Task };
