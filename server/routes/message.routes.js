const router = require('express').Router();

const {createMessage, getCommunityMessages} = require('../controllers/message.controller')
const {validateToken} = require('../middleware/validateToken');
router.post('/create', validateToken, createMessage);
router.get('/get/:id',validateToken, getCommunityMessages);

module.exports = router;
