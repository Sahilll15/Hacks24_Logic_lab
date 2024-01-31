const { Task } = require('../models/task.models')
const { Contractor } = require('../models/contractor.model');
const { Room } = require('../models/room.models');



const createTask = async (req, res) => {
    // const { projectId } = req.params;
    const { roomId } = req.params;
    try {
        const { title, description, priority } = req.body;
        const room = await Room.findById(roomId);

        if (!room) {
            return res.status(400).json({ error: 'Room not found' });
        }

        const projectId = room.project;

        const task = await Task.create({

            title,
            description,
            project: projectId,
            room: roomId,
            priority,
        });


        room.tasks.push(task._id);

        await room.save();



        res.status(200).json({ task });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}

const getTasksByProject = async (req, res) => {
    const { projectId } = req.params;
    try {
        const tasks = await Task.find({
            project: projectId
        });
        res.status(200).json({ tasks });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}


const getTasksByRoom = async (req, res) => {
    const { roomId } = req.params;
    try {
        const tasks = await Task.find({
            room: roomId
        });
        const percentageOfCompletion = tasks.filter(task => task.status === 'completed').length / tasks.length * 100;
        res.status(200).json({ tasks, percentageOfCompletion });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}


const updateTask = async (req, res) => {
    const { id } = req.params;
    try {
        const { title, description, status } = req.body;
        const task = await Task.findByIdAndUpdate(id, {
            title,
            description,
            status
        });
        res.status(200).json({ task });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}

const assignContractor = async (req, res) => {
    const { taskId, contractorId } = req.params;

    try {
        const task = await Task.findByIdAndUpdate(taskId, {
            contractor: contractorId
        });

        const contractor = await Contractor.findById(contractorId)

        contractor.tasks_assigned.push(taskId);

        task.contractor = contractorId;
        task.taskAssigned = true;
        await task.save();

        await contractor.save();


        res.status(200).json({ task });

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Something went wrong' });
    }

}


const deleteTask = async (req, res) => {
    const { taskId } = req.params;

    try {
        const task = await Task.findByIdAndDelete(taskId);

        const contractor = await Contractor.findById(task.contractor);

        contractor.tasks_assigned.pull(taskId);

        const room = await Room.findById(task.room);

        room.tasks.pull(taskId);

        await room.save();

        await contractor.save();


        res.status(200).json({ task });


    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}



module.exports = {
    createTask,
    getTasksByProject,
    getTasksByRoom,
    updateTask,
    assignContractor,
    deleteTask
}

