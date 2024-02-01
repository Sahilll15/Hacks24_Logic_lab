const { Project } = require('../models/project.models')
const { Designer } = require('../models/designer.model');
const { invite_home_owner_to_project } = require('../utils/email');
const { Owner } = require('../models/owner.model');
const { Room } = require('../models/room.models');
const { Task } = require('../models/task.models');
const { Chat } = require('../models/chat.model');
const ObjectId = require('mongoose').Types.ObjectId;
const accountSid = 'ACd2353db9e8a512c240b7618e2e90fd5a';
const authToken = '89d6daa4239c96391c717a90fbecb526';
const client = require('twilio')(accountSid, authToken);




const getPichartDataForBudget = async (req, res) => {
    const { id } = req.user;

    try {
        const user = await Designer.findOne({
            designer: id
        });

        const projects = await Project.find({
            designer: user.designer
        });



        if (!projects) {
            return res.status(400).json({ error: 'No projects found' });
        }

        let totalProjectsCompleted = 0;
        let totalProjectsIncomplete = 0;
        let totalBudget = 0;

        for (const project of projects) {
            let percentageOfCompletion = 0;
            let totalTasks = 0;

            for (const roomId of project.rooms) {
                const room = await Room.findById(roomId);
                if (!room) continue;
                totalBudget += room.budget || 0;

                for (const taskId of room.tasks) {
                    const task = await Task.findById(taskId);

                    if (task?.status === 'completed') {
                        percentageOfCompletion++;
                    }

                    totalTasks++;
                }
            }

            if (percentageOfCompletion === totalTasks) {
                totalProjectsCompleted++;
            } else {
                totalProjectsIncomplete++;
            }
        }

        const averageProjectsCompleted = totalProjectsCompleted / projects.length;
        const averageProjectsIncomplete = totalProjectsIncomplete / projects.length;
        const averageBudget = totalBudget / projects.length;

        res.status(200).json({
            averageBudget,
            totalBudget


        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
};


const getPichartData = async (req, res) => {
    const { id } = req.user;

    try {
        const user = await Designer.findOne({
            designer: id
        });

        const projects = await Project.find({
            designer: user.designer
        });

        let totalProjectsCompleted = 0;
        let totalProjectsIncomplete = 0;
        let totalBudget = 0;

        for (const project of projects) {
            let percentageOfCompletion = 0;
            let totalTasks = 0;

            for (const roomId of project.rooms) {
                const room = await Room.findById(roomId);
                if (!room) continue;
                totalBudget += room.budget || 0;

                for (const taskId of room.tasks) {
                    const task = await Task.findById(taskId);

                    if (task?.status === 'completed') {
                        percentageOfCompletion++;
                    }

                    totalTasks++;
                }
            }

            if (percentageOfCompletion === totalTasks) {
                totalProjectsCompleted++;
            } else {
                totalProjectsIncomplete++;
            }
        }

        const averageProjectsCompleted = totalProjectsCompleted / projects.length;
        const averageProjectsIncomplete = totalProjectsIncomplete / projects.length;
        const averageBudget = totalBudget / projects.length;

        res.status(200).json({
            totalProject: projects.length,
            totalProjectsCompleted,
            totalProjectsIncomplete,
            averageProjectsCompleted,
            averageProjectsIncomplete,

        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
};

const createProject = async (req, res) => {
    const { id: designerId } = req.user;
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
            homeOwnerName,
            homeOwnerEmail,
            homeOwnerPhone,
            image: image ? image : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fhousing.com%2Fnews%2F3d-home-design-definition-and-how-it-can-be-created%2F&psig=AOvVaw3Incwf0tgz-ZN5omjtBdgI&ust=1706794246691000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCJit_pTeh4QDFQAAAAAdAAAAABAJ",
            password: randomPwd
        });

        isDesigner.projects.push(project._id);
        await isDesigner.save();

        const doesOwnerExist = await Owner.findOne({ email: homeOwnerEmail });

        if (doesOwnerExist) {
            doesOwnerExist.projects.push(project._id);
            await doesOwnerExist.save();
            project.Owner = doesOwnerExist._id
            await project.save();
            const newChat = await Chat.create({ projectId: project._id });

        }



        client.messages
            .create({
                body: `Your password and id for project ${title} is ${randomPwd} and ${project._id} respectively`,
                from: 'whatsapp:+14155238886',
                to: 'whatsapp:+919022516901'
            })
            .then(message => console.log(message.sid))


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
        const p = []
        const projects = await Project.find({
            designer: id
        });
        for (const x of projects) {
            let percentageOfCompletion = 0;
            let totalTasks = 0;
            let totalRooms = 0;
            let totalBudget = 0;
            for (const y of x.rooms) {

                const room = await Room.findById(y);
                totalRooms++;
                totalBudget += room.budget;
                for (const z of room.tasks) {
                    const task = await Task.findById(z);

                    if (task?.status === 'completed') percentageOfCompletion++;

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
        res.status(200).json({ projects: p });
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

const getProjectById = async (req, res) => {
    const { id: projectId } = req.params;
    const tasks_ = [];
    const rooms = [];
    try {

        const project = await Project.findById(projectId);
        if (!project) {
            return res.status(404).json({ error: 'Project not found' });
        }
        let percentageOfCompletionProject = 0;

        for (const x of project.rooms) {
            const room = await Room.findById(x);
            if (!room) continue;
            let percentageOfCompletion = 0;
            for (const y of room.tasks) {

                const task = await Task.findById(y);
                if (task) tasks_.push(task);
                if (task?.status === 'completed') percentageOfCompletion++;
            }
            rooms.push({
                room,
                percentageOfCompletion: Math.round((percentageOfCompletion / room.tasks.length) * 100)
            })
        }
        if (tasks_.length > 0) {
            percentageOfCompletionProject = tasks_.filter(task => task.status === 'completed').length / tasks_.length * 100;
        }
        if (!project) {
            return res.status(404).json({ error: 'Project not found' });
        }
        res.status(200).json({ project, tasks: tasks_, rooms, noOfTasks: tasks_.length, noOfRooms: rooms.length, percentageOfCompletionProject });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}


const getProjectByIdChart = async (req, res) => {

    const { id: projectId } = req.params;
    const tasks_ = [];
    const rooms = [];
    try {

        console.log('project id', projectId)
        const project = await Project.findById(projectId);
        if (!project) {
            return res.status(404).json({ error: 'Project not found' });
        }
        let percentageOfCompletionProject = 0;

        for (const x of project.rooms) {
            const room = await Room.findById(x);
            if (!room) continue;
            let percentageOfCompletion = 0;
            for (const y of room.tasks) {

                const task = await Task.findById(y);
                if (task) tasks_.push(task);
                if (task?.status === 'completed') percentageOfCompletion++;
            }
            rooms.push({
                room,
                percentageOfCompletion: Math.round((percentageOfCompletion / room.tasks.length) * 100)
            })
        }
        if (tasks_.length > 0) {
            percentageOfCompletionProject = tasks_.filter(task => task.status === 'completed').length / tasks_.length * 100;
        }
        if (!project) {
            return res.status(404).json({ error: 'Project not found' });
        }
        res.status(200).json({ percentageOfCompletionProject, remaining: 100 - percentageOfCompletionProject });
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
    deleteProject,
    getProjectById,
    getPichartData,
    getPichartDataForBudget,
    getProjectByIdChart
}

