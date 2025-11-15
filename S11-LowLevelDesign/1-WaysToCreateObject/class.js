// Creating Objects using literals
// const car = {
//     make: "Toyota", 
//     model: "Fortuner", 
//     start: function() {
//         console.log(`${this.make} ${this.model} is starting`);
//     }
// }

// car.start();

/* Problems? 
1. Lot of code Duplication
2. Memory footprint would be higher
3. Not extensible
4. Non uniform
5. Hard coded properties
6. Non secure
*/ 

// Crating an object using Constructor function 
// function car(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
    
//     this.start = function() {
//         // Injects fuel --> 
//         // Ignite spark plug --> 
//         // rotates the engine

//         console.log(`${this.make} ${this.model} is starting`);
//     }

//     this.injectFuel = function () {}
//     this.igniteSparkPlug = function () {}
//     this.rotateEngine = function () {}

//     this.drive = function() {
//         console.log(`${this.make} ${this.model} is cruising`);
//     }
// }

// const fortuner = new car("Toyota", "fortuner", 2022);

// const bmw = new car("BMW", "X1", 2025);

// fortuner.start()
// bmw.start()


/* Problems
1. Extensible
2. Code duplication 
3. Security
*/


// class keyword 
class Car {
    constructor (make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    start = function() {
        // Injects fuel --> 
        // Ignite spark plug --> 
        // rotates the engine

        console.log(`${this.make} ${this.model} is starting`);
    }

    #injectFuel = function () {}
    #igniteSparkPlug = function () {}
    #rotateEngine = function () {}

    drive = function() {
        console.log(`${this.make} ${this.model} is cruising`);
    }

}

const fortuner = new Car("Toyota", "fortuner", 2022);

fortuner.start()


class ElectricCar extends Car{

}



