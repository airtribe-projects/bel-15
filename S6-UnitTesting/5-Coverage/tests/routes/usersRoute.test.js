const request = require("supertest");
const express = require("express");
const router = require("../../src/routes/usersRoute");
const { registerUser, loginUser } = require("../../src/controllers/usersController"); 

jest.mock("../../src/controllers/usersController");

const app = express()
app.use(express.json());
app.use(router);

describe('User Authentication Routes', () => {
    describe('POST /register', () => {
        it('should successfully register a user', async () => {
            const user = {
                name: "John Doe",
                email: "john@example.com",
                password: "password123",
                role: "user"
            };

            registerUser.mockResolvedValue(user);

            const response = await request(app)
                            .post("/register")
                            .send(user)
                            .expect(201);
            // toBe v/s toEqual
            // expect(response.body).toBe(user);
            expect(response.body).toEqual(user);
            expect(registerUser).toHaveBeenCalledWith(user);
        })

    })

})



        
