const { getProjectByIdChart, createProject, getPichartDataForBudget, getPichartData, deleteProject, updateProject, getProjectsByDesigner, getProjectsByOwner, getProjectById } = require('../controllers/project.controllers')
const { validateToken } = require('../middleware/validateToken')
const router = require('express').Router();

router.post('/create', validateToken, createProject);
router.delete('/delete/:id', validateToken, deleteProject);
router.put('/update/:id', validateToken, updateProject);
router.get('/designer', validateToken, getProjectsByDesigner);
router.get('/get-single/:id', validateToken, getProjectById);
router.get('/owner', validateToken, getProjectsByOwner);
router.get('/pichart', validateToken, getPichartData);
router.get('/pichartbudget', validateToken, getPichartDataForBudget);
router.get('/getProjectByIdChart/:id', validateToken, getProjectByIdChart);




module.exports = router;




