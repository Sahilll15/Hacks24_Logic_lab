const router = require('express').Router();

const {creatChat, getChats} = require('../controllers/chat.controller');
const {validateToken} = require('../middleware/validateToken')
router.post('/create', validateToken, creatChat);
router.get('/get/:id', validateToken, getChats);

module.exports = router;