
// Low level module
class PetrolEngine {
  start() {
    console.log("Petrol engine started");
  }
}

// High level module
class Car {
  private engine: PetrolEngine;

  constructor() {
    this.engine = new PetrolEngine();
  }

  startCar() {
    this.engine.start();
    console.log("Car started");
  }
}

const car = new Car();
car.startCar(); // Output: Petrol engine started
