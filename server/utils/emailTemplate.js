const projectInvitationTemplate = (projectName, owner_name, designer_name, project_pwd, project_id) => `

<!DOCTYPE html>
<html>
<head>
    <title>Project Invitation</title>

    <style>

        .container {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
        }

        .header {
            background: #f5f5f5;
            padding: 30px 40px;
        }

        .header h1 {
            margin: 0;
        }

        .content {
            padding: 40px;
        }

        .content p {
            margin: 0;
        }

        .footer {
            background: #f5f5f5;
            padding: 30px 40px;
        }

        .footer p {
            margin: 0;
        }

        .content-btn {
            padding: 40px;
            text-align: center;
            display: flex,
            justify-content: center;
            align-items: center;
        }

        .content-btn button {

            background-color: #4CAF50;
            border: none;
            color: white;
            padding: 15px 32px;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            

        }

    </style>

</head>

<body>


<div class="container">
    
        <div class="header">
            <h1>Project Invitation</h1>
        </div>
    
        <div class="content">
            <p>Dear ${owner_name},</p>
            <p>You have been invited to collaborate on the project ${projectName} by ${designer_name}.</p>
            <p>Please use the credentials below to access the project.</p>
            <p>Project Id: ${project_id}</p>
            <p>Password: ${project_pwd}</p>


        </div>

        <div class"content-btn">
            <a href="${process.env.BACKEND_URL}/project/${project_id}"><button>Access Now</button></a>
        </div>


    
        <div class="footer">
            <p>Best regards,</p>
            <p>DesignHub</p>
        </div>  

</div>

</body>

</html>

`

const pleaseReadUnreadMsgsTemplate = (name, project_name) => `
<!DOCTYPE html>
<html>

<head>

    <title>Please read unread messages</title>

    <style>
    
            .container {
                width: 100%;
                max-width: 600px;
                margin: 0 auto;
            }
    
            .header {
                background: #f5f5f5;
                padding: 30px 40px;
            }
    
            .header h1 {
                margin: 0;
            }
    
            .content {
                padding: 40px;
            }
    
            .content p {
                margin: 0;
            }
    
            .footer {
                background: #f5f5f5;
                padding: 30px 40px;
            }
    
            .footer p {
                margin: 0;
            }
    
            .content-btn {
                padding: 40px;
                text-align: center;
                display: flex,
                justify-content: center;
                align-items: center;
            }
    
            .content-btn button {
    
                background-color: #4CAF50;
                border: none;
                color: white;
                padding: 15px 32px;
                text-decoration: none;
                display: inline-block;
                font-size: 16px;

            }

    </style>

</head>

<body>

    <div class="container">

        <div class="header">
            <h1>Unread Messages</h1>

        </div>

        <div class="content">
            <p>Dear ${name},</p>
            <p>You have unread messages from ${project_name}.</p>
            <p>Please read them as soon as possible.</p>
        </div>

        <div class"content-btn">
            
            <a href="${process.env.BACKEND_URL}/project/${project_id}"><button>Access Now</button></a>
        </div>

        <div class="footer">
            <p>Best regards,</p>
            <p>DesignHub</p>
        </div>

    </div>

</body>

</html>
`


module.exports = {projectInvitationTemplate, pleaseReadUnreadMsgsTemplate}