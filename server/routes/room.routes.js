const { createRoom, deleteRoom, updateRoom, getRoomsByProject, getRoomById } = require('../controllers/room.controllers')

const {validateToken} = require('../middleware/validateToken');

const router = require('express').Router();



router.post('/create/:id', validateToken, createRoom);
router.delete('/delete/:id', validateToken, deleteRoom);
router.get('/single/:id', validateToken, getRoomById);
router.put('/update/:id', validateToken,  updateRoom);
router.get('/project/:id', validateToken, getRoomsByProject);

module.exports = router;





