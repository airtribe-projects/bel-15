const {add} = require('./sample');

// Defines a test suite 
// a collection of test for a specific functionality
describe("Test addition of 2 numbers", () => {

    test("Should add 2 positive numbers", () => {
        const result = add(2, 4);
        expect(result).toBe(6);
    });

    test("Should add 2 negative numbers", () => {
        const result = add(-2, -4);
        expect(result).toBe(-6);
    });

    test("Should add 1 positive and 1 negative numbers", () => {
        const result = add(-2, 4);
        expect(result).toBe(2);
    });

    test("Should accept 2 parameters", () => {
        const result = add(2);
        expect(result).toBe(null);
    })

    test("Should only accept numbers", () => {
        const result = add("Jay", 2);
        expect(result).toBe(null);
    })
})