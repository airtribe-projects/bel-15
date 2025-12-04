class ParkingTicket {
    // Without Builder
    // Can't construct the object step by step, will have to create it at once.
    constructor({ticketId, vehicle, spot, entryTime, exitTime, amount, paid, hourlyRate,dailyRate, monthlyPass}) {
        this.ticketId = ticketId;
        this.vehicle = vehicle;
        this.spot = spot;
        this.hourlyRate = hourlyRate;
        this.dailyRate = dailyRate;
        this.monthlyPass = monthlyPass;
        this.entryTime = entryTime;
        this.exitTime = exitTime;
        this.amount = amount;
        this.paid = paid;
    }


}

    // Builder pattern helps you set up the field one by one and you have full control as to how you can setup those fields, 
    // instead of using a constructor use a builder to initialize an object
    //  

    // How to impleent builder pattern
class ParkingTicketBuilder {
    setVehicle(vehicle) {
        this.vehicle =  vehicle;
        return this;
    }

    setSpot(spot) {
        this.spot = spot;
        return this;
    }

    setHourlyRate(rate) {
        this.hourlyRate = rate;
        return this;
    }

    setEntryTime(entryTime) {
        this.entryTime = entryTime;
        return this;
    }

    setExitTime(exitTime) {
        this.exitTime = exitTime;
        return this;
    }

    setAmout(amount) {
        this.amount = amount;
        return this;
    }

    setPaidStatus(paid) {
        this.paid = paid;
        return this;
    }

    // Important function
    build() {
        return new ParkingTicket(this)
    }
}

// Usage
// Scenario 1: 


// Async Code 
const ticket1 = new ParkingTicketBuilder()
                .setEntryTime(Date.now())
                .setExitTime(Date.now())
                .setAmout(20)
                .setPaidStatus(true)
                .build();

const ticket2 = new ParkingTicketBuilder()
  .setEntryTime(Date.now())
  .setHourlyRate(100)
  .build();




console.log(ticket);