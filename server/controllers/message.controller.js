const {Message} = require('../models/message.model');
const {User} = require('../models/user.model');
const {Chat} = require('../models/chat.model');
const {Project} = require('../models/project.models');
const { pleaseReadUnreadMsgsTemplate } = require('../utils/emailTemplate');
const { please_read_unread_msgs } = require('../utils/email');


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
        message_.readBy.push(req.user.id);
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

const readAllMessages = async (req, res) => {

    const { id } = req.params;

    try{
        const community = await Chat.findOne({projectId: id});
        if(!community){
            return res.status(400).json({ error: "No such community exists" });
        }
        const messages = await Message.find({chatId: id});
        for(const message of messages){
            if(!message.readBy.includes(req.user.id)){
                message.readBy.push(req.user.id);
                await message.save();
            }
        }
        res.status(200).json({ message: "All messages read successfully" });
    }catch(error){
        console.log(error);
        res.status(500).json({ error: error.message });
    }
}


const hasMessagesBeenRead = async (req, res) => {

    try{

        const { id } = req.params;

        const community = await Chat.find({projectId: id});

        const project = await Project.findById(id);

        if(!project){
            return res.status(400).json({ error: "No such project exists" });
        }

        if(!community){
            return res.status(400).json({ error: "No such community exists" });
        }

        const messages = await Message.find({chatId: id});

        let flag = false;
        let user = null;

        for(const message of messages){
            if(!message.readBy.includes(req.user.id)){
               flag = true;
                user = await User.findById(message.sender);

            }
        }

        if(flag){
            await please_read_unread_msgs(user.name, project.name);
        }


    }catch(error){
        console.log(error);
        res.status(500).json({ error: error.message });
    }
}

module.exports = { createMessage, getCommunityMessages, deleteMessages, hasMessagesBeenRead, readAllMessages };