const { Chat } = require('../models/chat.model');
const { Message } = require('../models/message.model');
const { User } = require('../models/user.model');

const creatChat = async (req,res) => {
    try{
        const {userId, projectId}  = req.body;
        const newChat = await Chat.create({
           
            projectId
        });

        newChat.members.push(req.user.id);
        newChat.members.push(userId);
        await newChat.save();

        res.status(200).json({newChat, message:"Chat created successfully"});
    }catch(error){
        console.log(error);
        res.status(500).json({error:error.message})
    }
}

const getChats = async (req,res) => {
    try{
        const chats = await Chat.find({members:req.user.id}).populate('members');
        res.status(200).json({chats});
    }catch(error){
        console.log(error);
        res.status(500).json({error:error.message})
    }
}


module.exports = {creatChat,getChats}

