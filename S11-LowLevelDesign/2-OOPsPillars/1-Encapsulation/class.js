class Car {
    #make;
    constructor(make, model, year, color, isElectric) {
      this.#make = make;
      this.model = model;
      this.year = year;
    }
  
    start() {
        this.#injectFuel();
        console.log(`${this.#make} ${this.model} is starting...`);
    }
  
    #injectFuel () {
        console.log(`${this.#make} ${this.model} is adding fuel to engine`);
    }

    drive(speed) {
      console.log(`${this.make} ${this.model} is driving at ${speed} km/h.`);
    }
}

const fortuner = new Car("Toyota", "Fortuner", 2022);

fortuner.start();


// console.log(fortuner.#injectFuel());
