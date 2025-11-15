class Animal {
    // Private field (only accessible inside the class)
    #name;
  
    constructor(name, sound) {
      this.#name = name;          // Private
      this.sound = sound;         // Public
    }
  
    // Public method
    speak() {
      console.log(`${this.#name} says ${this.sound}`);
    }
  
    // Getter for name (read-only access)
    getName() {
      return this.#name;
    }
  
    // Setter for name (controlled access)
    setName(newName) {
      if (typeof newName === 'string' && newName.length > 0) {
        this.#name = newName;
      } else {
        console.log('Invalid name!');
      }
    }
}


class Mammal extends Animal {
    constructor(name, sound, type) {
        super(name, sound);
        this.type = type;
    }

    breathe () {
        console.log(`${this.getName()} is breathing and it makes ${this.sound} sound`);
    }


}

const cat = new Mammal("Cat", "Meow", "Lives on Land");

cat.breathe()

class Human extends Mammal {
    constructor(name, sound, type) {
        super(name, sound, type);
    }

    talk() {
        console.log(`${this.getName()} talks in fluent english`);
    }

    speak() {
        console.log(`${this.getName()} speaks beautifully`);
    }
}


const tharoor = new Human("Sashi Tharoor", "talks", "human");

// tharoor.talk();
tharoor.speak();
