// Has - A relationship (Strong)
// Composition
// Human and Heart

class Heart {
    beat() {
        setInterval(() => {
            console.log("The heart is beating");
        }, 1000)
    }
}


class Human {
    #heart; 

    constructor() {
        this.#heart = new Heart();
    }

    // walk, talk
}

const jay = new Human();


