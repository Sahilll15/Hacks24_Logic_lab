const { Owner } = require('../models/owner.model')
const { Project } = require('../models/project.models')


const fetchProjectsByOwner = async (req, res) => {
    const { id } = req.user;
    try {
        const owner = await Owner.findOne({ owner: id }).populate('projects');
        res.status(200).json({ projects: owner.projects });
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



