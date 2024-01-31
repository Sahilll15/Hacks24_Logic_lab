const { Project } = require('../models/project.models')
const { Designer } = require('../models/designer.model');
const { invite_home_owner_to_project } = require('../utils/email');


const createProject = async (req, res) => {
    const { id: designerId } = req.user;
    console.log(designerId);
    try {

        const isDesigner = await Designer.findOne({ designer: designerId });

        console.log(isDesigner)

        if (!isDesigner) {
            return res.status(400).json({ error: 'You are not a designer' });

        }


        const { title, description, budget, homeOwnerName, homeOwnerEmail, homeOwnerPhone, image } = req.body;
        const randomPwd = Math.random().toString(36).slice(-8);
        const project = await Project.create({
            title,
            description,
            designer: designerId,
            budget,
            homeOwnerName,
            homeOwnerEmail,
            homeOwnerPhone,
            image: image || "https://static.turbosquid.com/Preview/2014/05/21__03_48_03/dummy_6.jpg8ed0eb08-e208-48e0-a1ae-9dc0805bcc6cZoom.jpg",
            password: randomPwd
        });

        isDesigner.projects.push(project._id);
        await isDesigner.save();

        await invite_home_owner_to_project(homeOwnerEmail, title, randomPwd, isDesigner.name, homeOwnerName, project._id);

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

        const designer = await Designer.findOne({ designer: designerId });

        if (designer.projects.includes(projectId)) {
            designer.projects = designer.projects.filter(project => project !== projectId);
            await designer.save();
        }

        res.status(200).json({ message: 'Project deleted successfully' });
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

