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
        type: String,
        required: true
    },
    project: {
        type: String,
        required: true
    },
    contractor: {
        type: String,
        required: true
    },
    homeOwner: {
        type: String,
        required: true
    },
    contractorName: {
        type: String,
        required: true
    },
    contractorEmail: {
        type: String,
        required: true
    },
    contractorPhone: {
        type: Number,
        required: true
    },
    homeOwnerName: {
        type: String,
        required: true
    },
    homeOwnerEmail: {
        type: String,
        required: true
    },
    homeOwnerPhone: {
        type: Number,
        required: true
    },
    contractorAcceptedTask: {
        type: Boolean,
        default: false
    },


});


const Task = mongoose.model('Task', taskModel);

module.exports = { Task };
