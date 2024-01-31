const { Project } = require('../models/project.models')
const { Designer } = require('../models/designer.models')


const createProject = async (req, res) => {
    const { id: designerId } = req.user;
    try {

        const isDesigner = await Designer.findById(designerId);

        if (!isDesigner) {
            return res.status(400).json({ error: 'You are not a designer' });

        }
        const { title, description, budget, homeOwnerName, homeOwnerEmail, homeOwnerPhone, image } = req.body;
        const project = await Project.create({
            title,
            description,
            designer: designerId,
            budget,
            homeOwnerName,
            homeOwnerEmail,
            homeOwnerPhone,
            image
        });

        isDesigner.projects.push(project._id);
        await isDesigner.save();

        res.status(200).json({ project });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}

const getProjectsByDesigner = async (req, res) => {
    const { id } = req.user;
    try {
        const projects = await Project.find({
            designer: id
        });
        res.status(200).json({ projects });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}

const getProjectsByOwner = async (req, res) => {
    const { id } = req.user;
    try {
        const projects = await Project.find({
            Owner: id
        });
        res.status(200).json({ projects });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}

const updateProject = async (req, res) => {
    const { id } = req.params;
    const { title, description, budget, homeOwnerName, homeOwnerEmail, homeOwnerPhone, image } = req.body;
    try {
        const project = await Project.findByIdAndUpdate(id, {
            title,
            description,
            budget,
            homeOwnerName,
            homeOwnerEmail,
            homeOwnerPhone,
            image
        }, { new: true });
        res.status(200).json({ project });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}

const deleteProject = async (req, res) => {
    const { id: projectId } = req.params;
    const { id: designerId } = req.user;
    try {
        const project = await Project.findByIdAndDelete(projectId);

        const designer = await Designer.findById(designerId);

        designer.projects.pull(projectId);
        await designer.save();

        res.status(200).json({ project });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}


module.exports = {
    createProject,
    getProjectsByDesigner,
    getProjectsByOwner,
    updateProject,
    deleteProject
}

