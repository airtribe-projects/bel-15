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

    // const hashedPassword = bcrypt.hashSync(password, 10);

    

    const isSamePassword = await bcrypt.compare(password, dbUser.password);



    // console.log(hashedPassword, dbUser.password, isSamePassword)
    

    if (!isSamePassword) {
        throw new Error("Invalid Password");
    }

    
    return {user: {id: dbUser.id}};
}


module.exports = {registerUser, loginUser};