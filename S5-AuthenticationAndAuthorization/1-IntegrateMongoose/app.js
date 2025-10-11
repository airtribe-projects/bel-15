require('dotenv').config(); 
const express = require('express');
const logger = require('./middleware/loggerMiddleware');    
const coursesRoute = require('./routes/coursesRoute');
const mongoose = require('mongoose');

const app = express();
app.use(express.json()); 
app.use(logger);
app.use("/api/v1/courses", coursesRoute);

app.get('/', (req, res, next) => {
    res.send("Hello World!!!");
})


const port = process.env.PORT || 3000;


// Bootstrapping Stage

// Promise.all()

mongoose.connect(process.env.MONGODB_CONNECTION_STRING)
    .then(() => {
        console.log("Connected to MongoDB")

        app.listen(port, () => {
            console.log("server is running on Port " + port);
        });
    }).catch(err => {
        console.log("Connection Error:", err)
    });
