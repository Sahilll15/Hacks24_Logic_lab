const router = require('express').Router();

const {createMessage, getCommunityMessages} = require('../controllers/message.controller')

router.post('/create', createMessage);
router.get('/get/:id', getCommunityMessages);

module.exports = router;
