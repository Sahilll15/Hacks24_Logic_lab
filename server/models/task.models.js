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
        enum: ['pending', 'accepted', 'rejected', "in-progress", "completed"]
    },
    images: {
        type: Array,
        default: []
    },
    budget: {
        type: Number,
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


    taskAssigned: {
        type: Boolean,
        default: false
    },

    priority: {
        type: String,
        enum: ['low', 'medium', 'high'],
        default: 'low'
    },


});


const Task = mongoose.model('Task', taskModel);

module.exports = { Task };
