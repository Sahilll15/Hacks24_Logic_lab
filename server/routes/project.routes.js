const { createProject, deleteProject, updateProject, getProjectsByDesigner, getProjectsByOwner } = require('../controllers/project.controllers')
const {validateToken} = require('../middleware/validateToken')
const router = require('express').Router();

router.post('/create', validateToken, createProject);
router.delete('/delete/:id', validateToken,  deleteProject);
router.put('/update/:id', validateToken,  updateProject);
router.get('/designer', validateToken, getProjectsByDesigner);
router.get('/owner', validateToken,  getProjectsByOwner);

module.exports = router;




