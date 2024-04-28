const { getContractor
    , getContractorById
    , getTasks,
    getTaskById
} = require('../controllers/contractor.controller');


const { validateToken } = require('../middleware/validateToken');

const router = require('express').Router();

router.get('/get/tasks', validateToken, getTasks);

router.get('/get/contractor', getContractor);

router.get('/get/contractor/:contractorId', getContractorById);

router.get('/get/task/:taskId', getTaskById);

module.exports = router;
