const mongoose = require('mongoose');

const DesignerSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
    },


    desginer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },


    clients: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }],

    projects: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
    }],



});

const Designer = mongoose.model('Designer', DesignerSchema);

module.exports = { Designer };