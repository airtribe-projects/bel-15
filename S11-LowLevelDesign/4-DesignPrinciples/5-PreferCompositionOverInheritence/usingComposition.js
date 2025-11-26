class Employee {
  constructor(name) {
    this.name = name;
  }

  clockIn() {
    console.log(`${this.name} clocked in`);
  }
}

class CanWriteCode {
    writeCode() {
        console.log(`${this.name} is writing code`);
    }
}

class CanReviewCode {
    reviewCode() {
        console.log(`${this.name} is reviewing work`);
    }
}

class CanPlanSprint {
    planSprint() {
        console.log(`${this.name} is planning the sprint`);
    }
}

class Developer extends Employee {
    #writeCode;
    constructor() {
        this.#writeCode = new CanWriteCode();
    }
  
    writeCode() {
        this.#writeCode.writeCode();
    }
}

class Manager extends Employee {
    #canReviewWork;
    #canWriteCode;
    constructor() {
        this.#canReviewWork = new CanReviewCode();
        this.#canWriteCode = new CanWriteCode();
    }
  
    reviewWork() {
        this.#canReviewWork.reviewWork();
    }

    writeCode() {
        this.#canWriteCode.writeCode();
    }
}

class TechLead extends Developer {
    #canPlanSprint;
    constructor() {
        this.#canPlanSprint = new CanPlanSprint();
    }
  
    planSprint() {
        this.#canPlanSprint.planSprint();
    }
}

