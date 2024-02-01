const { getContractor
    , getContractorById
    , getTasks
} = require('../controllers/contractor.controller');


const router = require('express').Router();

router.get('/get/tasks', getTasks);

router.get('/get/contractor', getContractor);

router.get('/get/contractor/:contractorId', getContractorById);

module.exports = router;
