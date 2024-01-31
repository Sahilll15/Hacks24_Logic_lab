
const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({

    content: {
        type: String,
        required: true,
        maxlength: 500
    },

    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    chatId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Chat'
    },

}, { timestamps: true });

const Message = mongoose.model('Message', messageSchema);

module.exports = {Message};