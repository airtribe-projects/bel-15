// PM comes to you and says that I want a calculator which can help me with addition and substraction of numbers


class Calculator {
    constructor() {
        this.result = 0;
    }
    
    add(a, b) {
        this.result = a + b;
        return this.result;
    }
    
    subtract(a, b) {
        this.result = a - b;
        return this.result;
    }
    
    multiply(a, b) {
        this.result = a * b;
        return this.result;
    }
    
    divide(a, b) {
        if (b === 0) {
        throw new Error("Cannot divide by zero");
        }
        this.result = a / b;
        return this.result;
    }
}