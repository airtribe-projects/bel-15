const express = require('express');

const app = express();

app.use(express.json()); 
/* parses the body in JSON format
    attaches it to the req object as req.body
*/

const logger = (req, res, next) => {
    console.log(`${req.method}: Request recieved on ${req.url}`)
    next();
}

app.use(logger);
// app.use(globalLogger2);


const courses = [
    { id: 1, name: 'Learn ReactJS', price: 299 },
    { id: 2, name: 'Learn Angular', price: 399 },
    { id: 3, name: 'Learn VueJS', price: 499 },
];


app.get('/api/v1/courses', (req, res, next) => {
    req.data = courses;
    res.send(courses);
});


app.get('/api/v1/courses/:id',   (req, res, next) => {  
    console.log(req.params);
    const courseId = req.params.id;
    const course = courses[courseId-1];
    
    if (course === undefined) {
        res.status(404).send("The course with the given ID was not found");
        return;
    }

    req.data = course;
    // next()

    res.send(course);
});

/*
Intent 3: Create a course with course details

POST {prefix}/courses
body: {
    id: 
    ...
    ...
}


*/

app.post('/api/v1/courses', (req, res, next) => {
    const course = req.body;

    course.id = courses.length + 1 ;
    courses.push(course);

    res.send(course);
});


app.get('/', (req, res, next) => {
    res.send("Hello World!!!");
    // console.log("calling home route");
    // next()
})

const port = 80;

app.listen(port, () => {
    console.log("server is running on Port " + port);
});