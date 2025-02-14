const express = require('express');
const { getProjects, createProject, updateProject, deleteProject } = require('../controllers/projectController');

const router = express.Router();

router.get('/', getProjects);
router.post('/', createProject);
router.put('/:id', updateProject); // PUT route for updating a project
router.delete('/:id', deleteProject); // DELETE route for deleting a project

module.exports = router;