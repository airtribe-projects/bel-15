const bcrypt = require('bcrypt');

const SALT_ROUNDS = process.env.SALT_ROUNDS;


const usersModel = require('../models/usersModel');


const registerUser = async (user) => {
    const startTime = Date.now();
    user.password = bcrypt.hashSync(user.password, 10);
    console.log("Hash Computation time:", Date.now()- startTime);
    const dbUser = await usersModel.create(user);
    dbUser.password = "";
    return dbUser;
}


const loginUser = async (email, password) => {
    const dbUser = await usersModel.findOne({email });
    
    if (!dbUser) {
        throw new Error("User not found");
    }

    const isSamePassword = await bcrypt.compare(password, dbUser.password);


    if (!isSamePassword) {
        console.log("Invalid password");
        throw new Error("Invalid Password");
    }
    
    return dbUser;
}


module.exports = {registerUser, loginUser};