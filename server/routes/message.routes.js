const router = require('express').Router();

const {createMessage, getCommunityMessages, readAllMessages} = require('../controllers/message.controller')
const {validateToken} = require('../middleware/validateToken');
router.post('/create', validateToken, createMessage);
router.get('/get/:id',validateToken, getCommunityMessages);
router.patch('/read-it-all/:id',validateToken, readAllMessages);

module.exports = router;
