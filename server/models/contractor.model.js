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

    tasks_assigned:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task'
    }],



}, { timestamps: true });

module.exports = mongoose.model('Contractor', contractorModel);