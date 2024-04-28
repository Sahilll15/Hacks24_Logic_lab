const { Task } = require('../models/task.models')
const { Contractor } = require('../models/contractor.model');
const { Room } = require('../models/room.models');



const taskcompletion = async (req, res) => {

    const { taskId } = req.params;

    try {
        const task = await Task.findById(taskId);

        await Task.findByIdAndUpdate(taskId, { status: 'completed' });

        let file = ''
        if (req.file) {
            file = req.file.path
        }

        task.completionMessage = req.body.completionMessage;
        task.file = file;

        await task.save();

        res.status(200).json({ task });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}


const createTask = async (req, res) => {
    // const { projectId } = req.params;
    const { roomId } = req.params;
    try {
        const { title, description, priority, budget } = req.body;
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
            budget: budget,
            priority,
        });


        room.tasks.push(task._id);

        room.budget += parseInt(budget);


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
        }).populate('contractor');
        const percentageOfCompletion = tasks.filter(task => task.status === 'completed').length / tasks.length * 100;
        res.status(200).json({ tasks, percentageOfCompletion });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}


const updateTask = async (req, res) => {
    const { taskId: id } = req.params;


    try {

        console.log('taskid', id)

        const taskFind = await Task.findById(id);

        console.log('taskFind', taskFind)
        const task = await Task.findByIdAndUpdate(
            id,
            { $set: req.body },
            { new: true }
        );

        if (!task) {
            return res.status(400).json({ error: 'Task not found' });
        }

        res.status(200).json({ task });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}


const assignContractor = async (req, res) => {
    const { taskId, contractorId } = req.params;

    console.log('taskId', taskId)
    console.log('contractorId', contractorId)

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
    deleteTask,
    taskcompletion
}

