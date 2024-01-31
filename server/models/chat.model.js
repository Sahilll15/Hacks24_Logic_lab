const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({


    projectId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project'
    },
   

    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
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
    }],


}, { timestamps: true });

const Chat = mongoose.model('Chat', chatSchema);

module.exports = {Chat};