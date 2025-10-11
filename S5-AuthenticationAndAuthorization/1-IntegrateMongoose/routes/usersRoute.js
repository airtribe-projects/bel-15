const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');



router.post('/login', async (req, res) => {

    const {email, password} = req.body;
    
    try {
        const dbUser = await usersController.loginUser(email, password);
        res.status(200).send({dbUser});
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.post('/register', async (req, res) => {

    const user = req.body;
    
    try {
        const dbUser = await usersController.registerUser(user);
        res.status(201).send({dbUser});
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

module.exports = router;
