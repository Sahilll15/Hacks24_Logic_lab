const { Task } = require('../models/task.models')


const createTask = async (req, res) => {
    const { projectId } = req.params;
    const { roomId } = req.params;
    try {
        const { title, description } = req.body;
        const task = await Task.create({
            title,
            description,
            project: projectId,
            room: roomId
        });
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
        res.status(200).json({ tasks });
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

