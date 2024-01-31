const { createRoom, deleteRoom, updateRoom, getRoomsByProject } = require('../controllers/room.controllers')


const router = require('express').Router();


router.post('/create', createRoom);
router.delete('/delete/:id', deleteRoom);
router.put('/update/:id', updateRoom);
router.get('/project/:id', getRoomsByProject);

module.exports = router;





