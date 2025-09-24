const express = require('express');
const router = express.Router();
const courses = require('../models/coursesModel');



router.get('/', (req, res) => {
    req.data = courses;
    res.send(courses);
});


router.get('/:id',   (req, res) => {  
    console.log(req.params);
    const courseId = req.params.id;
    const course = courses[courseId-1];
    
    if (course === undefined) {
        res.status(404).send("The course with the given ID was not found");
        return;
    }

    res.send(course);
});

router.post('/', (req, res) => {
    const course = req.body;

    course.id = courses.length + 1 ;
    courses.push(course);

    res.send(course);
});


module.exports = router;
