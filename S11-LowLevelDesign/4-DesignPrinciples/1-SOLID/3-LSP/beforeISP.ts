interface PaymentMethod {
    processPayment(amount: number): void;
}



class CreditCardPayment implements PaymentMethod {
    processPayment(amount: number): void {
        console.log("Payment made via credit card", amount);
    }
}

class DebitCardPayment implements PaymentMethod {
    processPayment(amount: number): void {
        console.log("Payment made via debit card", amount);
    }
}

class UPIPayment implements PaymentMethod {
    processPayment(amount: number): void {
        console.log("Payment made via UPI", amount);
    }
}

class FreePayment implements PaymentMethod {
    processPayment(amount: number): void {
        // throw new Error("No processing needed");
        console.log("No processing needed as it is a free payment");
    }
}



class PayServiceOCP {
    paymentMethod : PaymentMethod;  
    constructor(paymentMethod: PaymentMethod) {
        this.paymentMethod = paymentMethod;
    }
    // @ts-ignore
    processPayments(amount) {
        
        this.paymentMethod.processPayment(amount);
    }
}


// Main
const inputPaymentTypeOCP = "FREEPAYMENT";
const CCPaymentType = new CreditCardPayment();
const DCpaymentType = new DebitCardPayment();
const freePayment = new FreePayment();


const payserviceOCP = new PayServiceOCP(freePayment);

payservice.processPayments(0);
