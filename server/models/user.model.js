const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({

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
        required: true
    },

    password: {
        type: String,
        required: true
    },

    role: {
        type: String,
        enum: ['designer', 'owner', 'vendor'],
        default: 'designer'
    }

}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);