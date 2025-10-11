require('dotenv').config(); 
const express = require('express');
const logger = require('./middleware/loggerMiddleware');    
const coursesRoute = require('./routes/coursesRoute');
const usersRoute = require('./routes/usersRoute');

const mongoose = require('mongoose')


const app = express();
app.use(express.json()); 
app.use(logger);
app.use("/api/v1/courses", coursesRoute);
app.use("/api/v1/users", usersRoute);
app.get('/', (req, res, next) => {
    res.send("Hello World!!!");
})


const port = process.env.PORT || 3000;



const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI).then(() => {
    console.log("MongoDB Started");
    app.listen(port, () => {
        console.log("server is running on Port " + port);
    });
})


