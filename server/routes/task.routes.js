const { createTask, deleteTask, updateTask, assignContractor } = require('../controllers/task.controllers')

const router = require('express').Router();

router.post('/create', createTask);
router.delete('/delete/:taskId', deleteTask);
router.put('/update/:taskId', updateTask);
router.put('/assign/:taskId/:contractorId', assignContractor);

module.exports = router;
