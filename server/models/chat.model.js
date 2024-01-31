const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({


    projectId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project'
    },

    members: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],

    latestMessage: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message'
    },

    messages: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message'
    }]


}, { timestamps: true });

const Chat = mongoose.model('Chat', chatSchema);

module.exports = {Chat};