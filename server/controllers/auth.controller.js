const { User } = require('../models/user.model');
const { Designer } = require('../models/designer.model');
const bcrypt = require('bcrypt');
const { Contractor } = require('../models/contractor.model');
const jwt = require('jsonwebtoken');
const { Owner } = require('../models/owner.model');
const { Project } = require('../models/project.models');


const register = async (req, res) => {

    try {
        const { name, email, password, phone, role } = req.body;

        if (!name || !email || !phone || !password || !role) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const doesUserExists = await User.findOne({ email });



        if (doesUserExists) {
            return res.status(400).json({ message: `User with email ${email} already exists` });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({ name, email, phone, password: hashedPassword, role });

        if (user.role === 'designer') {
            await Designer.create({ name, email, phone, designer: user._id });
        } else if (user.role === 'owner') {
            const owner = await Owner.create({ name, email, phone, owner: user._id });

            const projects = await Project.find({ homeOwnerEmail: email });

            if (projects.length > 0) {
                projects.forEach(async (project) => {
                    owner.projects.push(project._id);
                    await project.save();
                }
                )
            }
            await owner.save();

        } else if (user.role === 'contractor') {
            await Contractor.create({ name, email, phone, contractor: user._id });
        }


        return res.status(201).json({ message: `${role} registered successfully` });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

const login = async (req, res) => {

    try {

        const { email, password } = req.body;
        console.log('email',email)
        console.log('password',password)
        

        if (!email || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }


        const users=await User.find();
        console.log('users',users)
        const doesUserExists = await User.findOne({ email:email });
        console.log('doesUserExists',doesUserExists)

        if (!doesUserExists) {
            return res.status(400).json({ message: `User with email ${email} doesn't exists` });
        }

        const isPasswordCorrect = await bcrypt.compare(password, doesUserExists.password);

        if (!isPasswordCorrect) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: doesUserExists._id, email: doesUserExists.email }, process.env.JWT_SECRET, { expiresIn: '1d' });

        let designer = null;
        console.log(doesUserExists.role);
        if (doesUserExists.role === 'designer') {

            designer = await Designer.findOne({ designer: doesUserExists._id });
        }

        let contractor = null;
        if (doesUserExists.role == 'contractor') {

            contractor = await Contractor.findOne({ contractor: doesUserExists._id });

        }

        const payload = {
            name: doesUserExists.name,
            email: doesUserExists.email,
            role: doesUserExists.role,
            designer,
            contractor
        }

        return res.status(200).json({ message: `${payload.role} logged in successfully`, token, user: payload });

    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: 'Internal server error' });
    }
}


module.exports = {
    register,
    login
}

