const { Contractor } = require('../models/contractor.model');
const { Task } = require('../models/task.models')

const getTasks = async (req, res) => {

    try {
        console.log(req.user.id)
        console.log('req.user',req.user)
        const tasks = await Contractor.find({ contractor: req.user.id }).populate('tasks_assigned');
        console.log(tasks)
        res.status(200).json({ tasks });
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: 'Something went wrong' });
    }
}


const getTaskById = async (req, res) => {
    const { taskId } = req.params;
    try {
        const task = await Task.findById(taskId);

        res.status(200).json({ task });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}

const getContractor = async (req, res) => {
    try {
        const contractor = await Contractor.find();
        res.status(200).json({ contractor });
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: 'Something went wrong' });
    }
}


const getContractorById = async (req, res) => {
    const { contractorId } = req.params;
    try {
        const contractor = await Contractor.findById(contractorId);
        res.status(200).json({ contractor });
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: 'Something went wrong' });
    }
}




module.exports = {
    getTasks,
    getContractor,
    getContractorById,
    getTaskById
}