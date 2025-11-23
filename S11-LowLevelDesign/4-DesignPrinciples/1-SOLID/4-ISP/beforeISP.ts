interface orderProcessing{
    processOrder(): void;
    processPayment(): void;
    sendEmail(): void;
}



class orderProcessing implements orderProcessing {

}

class EventProcessing implements orderProcessing {

}




interface PaymentProcessor {
    processCreditCard(amount: number): void;
    processDebitCard(amount: number): void;
    processPayPal(amount: number): void;
    processBankTransfer(amount: number): void;  
}

class CreditCardPaymentProcessor implements PaymentProcessor {
    processCreditCard(amount: number): void {
        console.log(`Processing credit card payment of $${amount}`);
    }
    processDebitCard(amount: number): void {
        throw new Error("Method not implemented.");
    }
    processPayPal(amount: number): void {
        throw new Error("Method not implemented.");
    }
    processBankTransfer(amount: number): void {
        throw new Error("Method not implemented.");
    }
}
