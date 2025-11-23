// Interface
interface Engine {
    start(): void;
}

// Low level Modules
class PetrolEngine implements Engine {
    start() {
        console.log("Petrol engine started");
    }
}


class DieselEngine implements Engine {
    start() {
        console.log("Diesel engine started");
    }
}

class Car {
    private engine: Engine;
    // Dependency Injection
    constructor(engine: Engine) {
        this.engine = engine;
    }

    startCar() {
        this.engine.start();
        console.log("Car started");
    }
}

let petrolEngine = new PetrolEngine();
let merc: Car =  new Car(PetrolEngine);

// Dependency Inversion Principle
// DIP is achieved via DI