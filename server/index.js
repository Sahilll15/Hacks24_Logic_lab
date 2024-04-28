const express = require('express');
const authRoutes = require('./routes/auth.routes');
const projectRoutes = require('./routes/project.routes')
const roomRoutes = require('./routes/room.routes')
const taskRoutes = require('./routes/task.routes')
const messageRoutes = require('./routes/message.routes')
const chatRoutes = require('./routes/chat.routes')
const ownerRoutes = require('./routes/owner.routes')
const { Server } = require('socket.io');
const socketCtrl = require('./controllers/socket.controller')
const feedbackRoutes = require('./routes/feedback.routes')
const contractorRoutes = require('./routes/contractors.routes')
const { GoogleGenerativeAI } = require('@google/generative-ai');
const fs = require('fs')


const app = express();
require('dotenv').config()
const cors = require('cors')

const mongoose = require('mongoose');
const { upload } = require('./middleware/upload');


app.use(cors())
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Hello World!');
}
);

app.use('/uploads', express.static('uploads'));



const server = app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})


let API_KEY = 'AIzaSyA0RhWRyVzHpJPwMhjrPwUtxyRmwOBp4hs'
const genAI = new GoogleGenerativeAI(API_KEY);

const generateByImage=async(req,res)=>{
 try {
  const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });

  const file=req.file;
  

  console.log('file',file)

  //save the file in upload folder
  


  const prompt = "Rate the interior of the house and give suggestion if anything can be done better?";
  const image = {
    inlineData: {
      data: Buffer.from(fs.readFileSync(`uploads/${file.filename}`)).toString("base64"),
      mimeType: "image/png",
    },
  };
  
  const result = await model.generateContent([prompt, image]);
  res.status(200).json({
    caption:result.response.text()
  })
 } catch (error) {
  console.log('response error', error);

    res.send('error')
 }
}


const io = new Server(server, {
    pingTimeout: 60000,
    cors: {
        origin: '*',
    },
});

socketCtrl(io);

mongoose.connect(process.env.MONGO_URI, {
}).then(() => console.log('DB Connected'));

app.use('/api/v1/feedback', feedbackRoutes);
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/project', projectRoutes);
app.use('/api/v1/room', roomRoutes);
app.use('/api/v1/task', taskRoutes);
app.use('/api/v1/message', messageRoutes);
app.use('/api/v1/chat', chatRoutes);
app.use('/api/v1/owner', ownerRoutes);
app.use('/api/v1/contractor', contractorRoutes);
app.post('/generate',upload.single('image'),generateByImage)

