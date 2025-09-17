const express = require('express');

const app = express();

const globalLogger2 = (req, res, next) => {
    console.log(`${req.method}: Request recieved on ${req.url}  via global logger 2`)
    next();
}

const globalLogger = (req, res, next) => {
    console.log(`${req.method}: Request recieved on ${req.url}`)
    next();
}

app.use([globalLogger, globalLogger2]);
// app.use(globalLogger2);


const courses = [
    { id: 1, name: 'Learn ReactJS', price: 299 },
    { id: 2, name: 'Learn Angular', price: 399 },
    { id: 3, name: 'Learn VueJS', price: 499 },
];


app.get('/api/v1/courses', (req, res, next) => {
    req.data = courses;
    next();
    // res.send(courses);
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
    next()

    // res.send(course);
});

const formatResponse = (req, res) => { 
    return res.send({
        status: "success",
        data: req.data
    });
        console.log("Inside formatResponse middleware");
};


// req --> Pass through all the boxes


app.get('/', (req, res, next) => {
    // res.send("Hello World!!!");
    console.log("calling home route");
    next()
})

app.use(formatResponse);


app.listen(3000, () => {
    console.log("server is running on Port 3000");
});