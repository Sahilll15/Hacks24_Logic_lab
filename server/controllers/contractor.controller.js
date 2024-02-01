const { Contractor } = require('../models/contractor.model');

const getTasks = async (req, res) => {

    try {
        const tasks = await Contractor.find({ contractor: req.user.id }).populate('tasks_assigned');
        res.status(200).json({ tasks });
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: 'Something went wrong' });
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
    getContractorById
}