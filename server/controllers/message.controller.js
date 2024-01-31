const {Message} = require('../models/message.model');
const {Chat} = require('../models/chat.model');

const createMessage = async (req, res) => {

    try {
        const { content, chat } = req.body;
        if (!content || !chat) {
            return res.status(400).json({ error: "Please enter all the fields" });
        }
        const chatI = await Chat.findOne({projectId: chat});

        if (!chatI) {
            return res.status(400).json({ error: "No such community exists" });
        }
        const message_ = await Message.create({ content, chatId: chat._id, sender: req.user.id });
        chatI.messages.push(message_._id);
        chatI.latestMessage = message_._id;
        await chatI.save();
        res.status(200).json({ message_, message: "Message sent successfully" });
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message });
    }
}



const getCommunityMessages = async (req, res) => {

    try {
        const { id } = req.params;
        const community = await Chat.findOne({projectId: id}).populate('messages');
        if (!community) {
            return res.status(400).json({ error: "No such community exists" });
        }
        for (const message of community.messages) {
            await message.populate('sender', 'name')
        }
        const msg = community.messages;
        const nsg = [];
        for(const m of msg){
            nsg.push({
                message: m.content,
                user: m.sender.name,
                userId: m.sender._id
            })
        }
        res.status(200).json({ messages: nsg });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}



const deleteMessages = async (req, res) => {
    const { messageId } = req.params;
    const userID = req.user.id;
    try {
        const message = await Message.findById(messageId);
        if (!message) {
            return res.status(400).json({ error: "No such message exists" });
        }

        if (message.sender.toString() !== userID) {
            return res.status(400).json({ error: "You are not authorized to delete this message" });
        }

        const community = await Chat.findById(message.chatId);
        if (!community) {
            return res.status(400).json({ error: "No such community exists" });
        }
        const index = community.messages.indexOf(messageId);
        if (index > -1) {
            community.messages.splice(index, 1);
        }
        await community.save();
        await message.remove();
        res.status(200).json({ message: "Message deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

}

module.exports = { createMessage, getCommunityMessages, deleteMessages };