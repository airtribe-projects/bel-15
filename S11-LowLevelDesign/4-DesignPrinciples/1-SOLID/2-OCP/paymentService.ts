class PayService {
    // @ts-ignore
    processPayments(paymentType, amount) { // Anti patterns
        if (paymentType == "CC") {
            console.log("Payment made via credit card", paymentType, amount);
        } else if (paymentType == 'DC') {
            console.log("Payment made via credit card", paymentType, amount);
        } else if (paymentType == 'UPI') {
            console.log("Payment made via UPI", paymentType, amount);
        } else {
            console.log("Payment type not supported", paymentType, amount);
        }
    }
}

// Main code
const inputPaymentType = "CC";
const payservice = new PaymentService();
payservice.processPayments(inputPaymentType, 1000);








// After OCP

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

const inputPaymentTypeOCP = "CC";
const CCPaymentType = new CreditCardPayment();
const DCpaymentType = new DebitCardPayment();


const payserviceOCP = new PayServiceOCP(CCPaymentType);

payservice.processPayments(inputPaymentType, 1000);





