abstract class Vehicle {
    make: string;
    model: string;

    constructor(make: string, model: string) {
        this.make = make;
        this.model = model;
    }

    abstract start(param1: string, param2: string): void;

    stop(): void {
        console.log(`Stopping the vehicle: ${this.make} ${this.model}`);
    }
}

class Car extends Vehicle {
    start(param1: string, param2: string): void {
        console.log(`Starting the car: ${this.make} ${this.model}`);
    }

}



// class Truck extends Vehicle {
//     start(param1: string, param2: string): void {
//        console.log(`Starting the Truck: ${this.make} ${this.model}`);
//     }  
// }

// const vehicle = new Vehicle()

// I would never want my vehicle class to be instantiated but I want the vehicle class to provide a structure to my child classes


interface Drivable {
    speed: number;
    drive(): void;
    stop(): void;
    start(): void;
}

interface Flyable {
    takeoff(): void;
    cruise(): void;
    land(): void;
}

class Bird implements Flyable {
    takeoff(): void {
        throw new Error("Method not implemented.");
    }
    cruise(): void {
        throw new Error("Method not implemented.");
    }
    land(): void {
        throw new Error("Method not implemented.");
    }

}


class Car implements Drivable, Flyable {
    speed: number;
    
    constructor(speed: number) {
        this.speed = speed;
    }
    
    takeoff(): void {
        throw new Error("Method not implemented.");
    }
    cruise(): void {
        throw new Error("Method not implemented.");
    }
    land(): void {
        throw new Error("Method not implemented.");
    }
    drive(): void {
        throw new Error("Method not implemented.");
    }
    stop(): void {
        throw new Error("Method not implemented.");
    }
    start(): void {
        throw new Error("Method not implemented.");
    }
}

class Truck implements Drivable {
    speed: number;
    drive(): void {
        throw new Error("Method not implemented.");
    }
    stop(): void {
        throw new Error("Method not implemented.");
    }
    start(): void {
        throw new Error("Method not implemented.");
    }
}


abstract class xyz implements Drivable {
    speed: number;
    
    drive(): void {
        throw new Error("Method not implemented.");
    }
    stop(): void {
        throw new Error("Method not implemented.");
    }
    start(): void {
        throw new Error("Method not implemented.");
    }

}