const express = require('express');
const logger = require('./middleware/loggerMiddleware');    
const coursesRoute = require('./routes/coursesRoute');

const app = express();
app.use(express.json()); 
app.use(logger);
app.use("/api/v1/courses", coursesRoute);

app.get('/', (req, res, next) => {
    res.send("Hello World!!!");
})

const port = 3000;

app.listen(port, () => {
    console.log("server is running on Port " + port);
});