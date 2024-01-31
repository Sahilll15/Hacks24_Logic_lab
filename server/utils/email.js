const nodemailer = require('nodemailer');
const {projectInvitationTemplate} = require('./emailTemplate')
require('dotenv').config();


const invite_home_owner_to_project = async (recipientEmail, project_name, project_pwd, designer_name, owner_name, project_id) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD,
            }
        })

        const emailcontent = projectInvitationTemplate(project_name, owner_name, designer_name, project_pwd, project_id);
        await transporter.sendMail({
            from: process.env.EMAIL_ADDRESS,
            to: recipientEmail,
            subject: "Project Invitation",
            html: emailcontent
        })
        console.log("Product received confirmation mail sent to " + recipientEmail)

    } catch (error) {
        console.log(error)
    }
}

module.exports = {invite_home_owner_to_project}