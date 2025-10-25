const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const usersModel = require("../../src/models/usersModel");
const { MongoMemoryServer } = require('mongodb-memory-server');
const { registerUser, loginUser } = require("../../src/controllers/usersController");

let mongoServer;

beforeAll (async () => {
    mongoServer = await MongoMemoryServer.create();
    const uri = mongoServer.getUri();
    await mongoose.connect(uri);
})

beforeEach(async () => {
    // Clear the database before each test
    await usersModel.deleteMany({});
});

 

afterAll (async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    await mongoServer.stop();
})


describe('User Authentication Tests', () => {
    it('should register a new user successfully with all fields', async () => {
        const user = {
            name: "John Doe",
            email: "test@example.com",
            password: "password123"
        };

        const dbUser = await registerUser(user);
        
        expect(dbUser).toHaveProperty("_id");
        expect(dbUser).toHaveProperty("password");
        expect(dbUser.name).toBe(user.name);
        expect(dbUser.role).toBe("user");
        const isSamePassword = await bcrypt.compare(user.password, dbUser.password);
        expect(isSamePassword).toBe(true);

    });

    it('should throw an error if email is already in use', async () => {
        const user1 = {
            name: "John Doe",
            email: "duplicate@example.com",
            password: "password123",
            role: "user"
        };

        const user2 = {
            name: "Jane Doe",
            email: "duplicate@example.com", // Same email
            password: "password456",
            role: "admin"
        };

            // Register first user
        await registerUser(user1);

        await expect(registerUser(user2)).rejects.toThrow("E11000 duplicate key error collection");
    });
})

describe('User Login', () => {
    test('should return an error when the user is not found', async () => {
        const email = "nonexistent@example.com";
        const password = "password123";

        await expect(loginUser(email, password)).rejects.toThrow("User not found");
    });  

    test('should return an error when the password is incorrect', async () => {
        const user = {
            name: "John Doe",
            email: "test@example.com",
            password: "password123",
            role: "user"
        };

        // Register user first to have them in the DB
        await registerUser(user);

        const wrongPassword = "wrongpassword";

        await expect(loginUser(user.email, wrongPassword)).rejects.toThrow("Invalid Password");
    });





})












