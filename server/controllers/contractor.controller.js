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

