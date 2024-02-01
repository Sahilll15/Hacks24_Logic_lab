const mongoose = require('mongoose');

const contractorModel = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
    },
    contractor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    tasks_assigned: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task'
    }],



}, { timestamps: true });

const Contractor = mongoose.model('Contractor', contractorModel);

module.exports = { Contractor };