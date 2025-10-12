const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const jwt = require('jsonwebtoken');



router.post('/login', async (req, res) => {

    const {email, password} = req.body;
    


    try {
        const dbUser = await usersController.loginUser(email, password);
        
        const payload = {
            id: dbUser._id,
            name: dbUser.name,
            role: dbUser.role,
            email: dbUser.email
        }
    
        // console.log(payload);

        const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '1h'});

        res.status(200).send({token});
    
    
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
