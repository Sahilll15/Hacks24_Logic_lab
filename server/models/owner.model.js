const mongoose = require('mongoose');

const OwnerSchema = mongoose.Schema({

    name:{
        type: String,
        required: true
    },

    email:{
        type: String,
        required: true,
        unique: true
    },

    phone:{
        type: String,
        required: true,
        unique: true
    },

    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },

    //more fields to be added...

},{timestamps: true});

module.exports = mongoose.model('Owner', OwnerSchema);