const express = require('express');

const app = express();

// Design Course Rating applicaiton
// - Get all courses: GET /api/v1/courses
// - Get a course by id: GET /api/v1/courses/:id

const courses = [
    { id: 1, name: 'Learn ReactJS', price: 299 },
    { id: 2, name: 'Learn Angular', price: 399 },
    { id: 3, name: 'Learn VueJS', price: 499 },
];


app.get('/api/v1/courses', (req, res) => {
    console.log(req.query);
    res.send(courses);
});



app.get('/api/v1/courses/:id/ratings/:ratingId', (req, res) => {
    res.send("This is rating for course" + req.params.id);
});

app.get('/api/v1/courses/:id', (req, res) => {
    
    const courseId = req.params.id;
    const course = courses[courseId-1];
    
    if (course === undefined) {
        res.status(404).send("The course with the given ID was not found");
        return;
    }

    res.send(course);
});





app.get('/', (req, res) => {
    console.log(JSON.stringify(req.headers));
    res.send("Hello World!!!");
})


app.listen(3000, () => {
    console.log("server is running on Port 3000");
});