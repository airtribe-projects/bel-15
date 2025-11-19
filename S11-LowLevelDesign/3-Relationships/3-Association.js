// Association 
// Uses - A relationship

class Person {
    constructor(name) {
        this.name = name;
    }    

    openAccount(bank) {
        console.log(`${this.name} opened an account. at ${bank}`);
    }
}

class Bank {
    constructor(name) {
        this.name = name;
    }

    provideLoan(person) {
        console.log(`${this.name} provided a loan to ${person.name}`);
    }
}

const jay = new Person('Jay');

const PNB = new Bank('PNB');


jay.openAccount(PNB);
PNB.provideLoan(jay);
