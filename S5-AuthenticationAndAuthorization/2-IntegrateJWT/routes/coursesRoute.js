const express = require('express');
const router = express.Router();
const coursesController = require('../controllers/coursesController');
const authMiddleware = require('../middleware/authMiddleware');  

router.use(authMiddleware);


router.get('/', coursesController.getAllCourses);

router.get('/:id',   coursesController.getCourseById);

router.post('/', coursesController.createCourse);

module.exports = router;
