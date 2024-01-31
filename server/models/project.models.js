const mongoose = require('mongoose');

const projectModel = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    designer: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Designer'
    },
    Owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'Owner'
    },
    status: {
        type: String,
        required: false,
        default: 'pending',
        enum: ['pending', 'accepted', 'rejected']
    },
    description: {
        type: String,
    },
    password: {
        type: String,
        required: true
    },
    userAcceptedProject: {
        type: Boolean,
        default: false
    },
    rooms: [{
        type: String,
        required: false
    }],
    budget: {
        type: Number,
        // required: true
    },
    homeOwnerName: {
        type: String,
        // required: true
    },
    homeOwnerEmail: {
        type: String,
        required: true
    },
    homeOwnerPhone: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        // required: true
    },
});


const Project = mongoose.model('Project', projectModel);

module.exports = { Project };

