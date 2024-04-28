const { taskcompletion, createTask, deleteTask, updateTask, assignContractor, getTasksByRoom } = require('../controllers/task.controllers')
const { upload } = require('../middleware/upload');

const router = require('express').Router();

router.post('/create/room/:roomId', createTask);
router.get('/get/room/:roomId', getTasksByRoom);
router.delete('/delete/:taskId', deleteTask);
router.put('/update/:taskId', updateTask);
router.put('/assign/:taskId/:contractorId', assignContractor);
router.post('/taskcompletion/:taskId', upload.single('image'), taskcompletion);

module.exports = router;
