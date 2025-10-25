const express = require("express");
const router = express.Router();
const {registerUser, loginUser} = require("../controllers/usersController");

router.post("/register", async (req, res) => {
    const user = req.body;
    
    // Uncomment this line after the unit test error
    //let dbUser
    // try{
    //     dbUser = await registerUser(user);
    //     return res.status(201).send(dbUser);
    // } catch (error) {
    //     return res.status(500).send({message: error.message});
    // }

    const dbUser = await registerUser(user);
    return res.status(201).send(dbUser);
    
});

router.post("/login",  async (req, res) => {
    const { email, password } = req.body;
    const token = await loginUser(email, password);
    return res.status(200).send({token: token});
});

module.exports = router;
