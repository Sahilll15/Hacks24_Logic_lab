const {Feedback} = require('../models/feedback.model');
const {User} = require('../models/user.model');
const {Project} = require('../models/project.models');
const {Room} = require('../models/room.models');

const createFeedback = async (req, res) =>  {
    const {id} = req.user;
    const {roomId} = req.params;
    const {rating, type, message} = req.body;

    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(400).json({error: 'User not found'});
        }

        const room = await Room.findById(roomId);


        // const room = await Room.findOne({project: projectId});
        if (!room) {
            return res.status(400).json({error: 'Room not found'});
        }

        const newFeedback = new Feedback({
            rating,
            type,
            message,
            room: roomId,
            room: room._id,
            user: id,
        });

        await newFeedback.save();
        res.status(200).json({Feedback: newFeedback});
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Something went wrong'});
    }
}

module.exports = {createFeedback};