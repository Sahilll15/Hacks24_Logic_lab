const { createProject, deleteProject, updateProject, getProjectsByDesigner, getProjectsByOwner } = require('../controllers/project.controllers')

const router = require('express').Router();

router.post('/create', createProject);
router.delete('/delete/:id', deleteProject);
router.put('/update/:id', updateProject);
router.get('/designer', getProjectsByDesigner);
router.get('/owner', getProjectsByOwner);

module.exports = router;