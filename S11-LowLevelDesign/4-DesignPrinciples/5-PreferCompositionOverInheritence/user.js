class Employee {
  constructor(name) {
    this.name = name;
  }

  clockIn() {
    console.log(`${this.name} clocked in`);
  }
}


class Developer extends Employee {
  writeCode() {
    console.log(`${this.name} is writing code`);
  }
}

class Manager extends Employee {
  reviewWork() {
    console.log(`${this.name} is reviewing work`);
  }
}

class ManagerDeveloper extends Manager {
    
}


class TechLead extends Developer {
  planSprint() {
    console.log(`${this.name} is planning the sprint`);
  }
}




