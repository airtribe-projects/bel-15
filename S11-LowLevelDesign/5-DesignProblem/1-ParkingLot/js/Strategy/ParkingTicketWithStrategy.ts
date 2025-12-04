
interface ParkingTicketFeeStrategy{
    calculateFee(): number;
}

//@ts-ignore
class ParkingTicket {
    ticketId: string;
    vehicle: any;
    amount: number;
    feeStrategy: ParkingTicketFeeStrategy;
    constructor(ticketId: string, vehicle: any, feeStrategy: ParkingTicketFeeStrategy) {
        this.ticketId = ticketId;
        this.vehicle = vehicle;
        this.amount = 0; 
        this.feeStrategy = feeStrategy
    }
    // All if else are gone
    calculateAmount() {
        this.feeStrategy.calculateFee(); 
    }
}


class SmallParkingFeeStrategy implements ParkingTicketFeeStrategy {
    calculateFee(): number {
        return 10;
    }
}

class MediumParkingFeeStrategy implements ParkingTicketFeeStrategy {
    calculateFee(): number {
        return 20;
    }
}

class LargeParkingFeeStrategy implements ParkingTicketFeeStrategy {
    calculateFee(): number {
        return 40;
    }
}




