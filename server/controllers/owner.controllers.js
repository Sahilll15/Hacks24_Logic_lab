const { Owner } = require('../models/owner.model')
const { Project } = require('../models/project.models');
const { Room } = require('../models/room.models');
const { Task } = require('../models/task.models');


const fetchProjectsByOwner = async (req, res) => {
    const { id } = req.user;
    try {
        const user = await Owner.findOne({ owner: id });
        if (!user) {
            return res.status(400).json({ error: 'You are not an owner' });
        }
        const owner = await Owner.findOne({ owner: id });

        if(!owner){
            return res.status(400).json({message: "owner does not exists"})
        }

        const projects = await Project.find({Owner: owner._id})

        const p = [];

        for(const x of projects){
            let percentageOfCompletion = 0;
            let totalTasks = 0;
            let totalRooms = 0;
            let totalBudget = 0;
            for(const y of x.rooms){

                const room = await Room.findById(y);
                totalRooms++;
                totalBudget += room.budget;
                for(const z of room.tasks){
                    const task = await Task.findById(z);
                    
                    if(task?.status === 'completed') percentageOfCompletion++;

                    totalTasks++;

                }
            }

            p.push({
                project: x,
                percentageOfCompletion: Math.round((percentageOfCompletion / totalTasks) * 100),
                totalTasks,
                totalRooms,
                totalBudget
            })
        }

        res.status(200).json({ projects: p});
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}


const fetchProjectById = async (req, res) => {
    const { id } = req.params;
    try {
        const project = await Project.findById(id).populate('rooms');
        res.status(200).json({ project });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}


const getProjectById = async (req, res) => {

    const { id: projectId, password } = req.body;
    const { id } = req.user;

    try {
        const project = await Project.findById(id).populate('rooms');

        if (!project) {
            return res.status(400).json({ error: 'Project not found' });
        }

        const user = await Owner.findOne({ owner: id });

        if (!user) {
            return res.status(400).json({ error: 'You are not an owner' });
        }

        if (password === project.password) {
            user.projects.push(projectId);
            return res.status(200).json({ project });
        }

        res.status(200).json({ project });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}

module.exports = {
    fetchProjectsByOwner,
    fetchProjectById,
    getProjectById
}



