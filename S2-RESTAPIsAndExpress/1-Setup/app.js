const express = require('express');

const app = express();


app.get('/', (req, res) => {
    console.log(JSON.stringify(req.headers));
    res.send("Hello World!!!");
})


app.listen(3000, () => {
    console.log("server is running on Port 3000");
});