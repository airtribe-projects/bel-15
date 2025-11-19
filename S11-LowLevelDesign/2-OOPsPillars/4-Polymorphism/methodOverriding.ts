class Person {
    protected name: string;


    constructor(name: string) {
        this.name = name;
    }

    protected getDetails() : string {
        return `Name: ${this.name}`
    }

    private getPhoneNumber() : number {
        return 1234;
    }
}

class Employee extends Person {
    private role: string;

    constructor(name: string, role: string) {
        super(name);
        this.role = role;
    }

    // Overriding the getDetails Implementation
    protected getDetails(): string {
        super.getDetails();
        super.getPhoneNumber();
        return `Name: ${this.name} is assigned a role of ${this.role}`;
    }
}

const emp:Employee = new Employee("John Doe", "Developer");

emp.getDetails();


