const User = require('../models/user.model');
const Designer = require('../models/designer.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


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
            await Designer.create({ name, email, designer: user._id });
        } else if (user.role === 'owner') {
            await Owner.create({ name, email, owner: user._id });
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

        if (!email || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const doesUserExists = await User.findOne({ email });

        if (!doesUserExists) {
            return res.status(400).json({ message: `User with email ${email} doesn't exists` });
        }

        const isPasswordCorrect = await bcrypt.compare(password, doesUserExists.password);

        if (!isPasswordCorrect) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: doesUserExists._id, email: doesUserExists.email }, process.env.JWT_SECRET, { expiresIn: '1d' });

        let designer = null;

        if (doesUserExists.role === 'designer') {

            designer = await Designer.findOne({ designer: doesUserExists._id });

        }

        const payload = {
            name: doesUserExists.name,
            email: doesUserExists.email,
            role: doesUserExists.role,
            designer
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

