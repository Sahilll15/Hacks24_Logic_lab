const { Room } = require('../models/room.models')
const { Designer } = require('../models/designer.model')
const { Project } = require('../models/project.models')


const createRoom = async (req, res) => {
    const { id: designerId } = req.user;
    const {id: projectId } = req.params;
    try {

        const isDesigner = await Designer.findOne({ designer: designerId });

        if (!isDesigner) {
            return res.status(400).json({ error: 'You are not a designer' });

        }

        const prj = await Project.findById(projectId);

        if (!prj) {
            return res.status(400).json({ error: 'Project not found' });
        }

        const { title, description, budget } = req.body;
        const room = await Room.create({
            title,
            description,
            budget,
            project: projectId
        });

        prj.budget += budget;
        prj.rooms.push(room._id);
        await prj.save();

        res.status(200).json({ room });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}


const getRoomsByProject = async (req, res) => {
    const { id: projectId } = req.params;
    try {
        const rooms = await Room.find({
            project: projectId
        });
        res.status(200).json({ rooms });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}


const getRoomsByDesigner = async (req, res) => {
    const { id } = req.user;
    try {
        const rooms = await Room.find({
            designer: id
        });
        res.status(200).json({ rooms });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}


const updateRoom = async (req, res) => {
    const { id } = req.params;
    // const { title, description, budget, status } = req.body;
    try {
        const room = await Room.findByIdAndUpdate(id, {
            $set:
                req.body
        }, { new: true });
        res.status(200).json({ room });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}

const deleteRoom = async (req, res) => {
    const { id } = req.params;
    try {
        const room = await Room.findByIdAndDelete(id);
        const project = await Project.findById(room.project);
        project.rooms.pull(room._id);
        await project.save();
        res.status(200).json({ message: 'Room deleted successfully'});
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}


module.exports = {
    createRoom,
    getRoomsByProject,
    getRoomsByDesigner,
    updateRoom,
    deleteRoom
}

