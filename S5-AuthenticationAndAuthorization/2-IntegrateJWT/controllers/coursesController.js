const courses = require('../models/coursesModel');

const getAllCourses = (req, res) => {

    req.data = courses;
    res.send(courses);
}

const getCourseById = (req, res) => {  
    console.log(req.params);
    const courseId = req.params.id;
    const course = courses[courseId-1];
    
    if (course === undefined) {
        res.status(404).send("The course with the given ID was not found");
        return;
    }

    res.send(course);
}

const createCourse = (req, res) => {

    if (req.user.role != 'admin') {
        return res.status(401).send("Insufficient Permissions");
    }

    const course = req.body;

    course.id = courses.length + 1 ;
    courses.push(course);

    res.send(course);
}


module.exports = {
    getAllCourses,
    getCourseById,
    createCourse
}