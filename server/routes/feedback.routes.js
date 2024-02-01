const router = require('express').Router();

const { createFeedback } = require('../controllers/feedback.controller');
const {validateToken} = require('../middleware/validateToken');


router.post('/create/:roomId', validateToken,createFeedback);

module.exports = router;