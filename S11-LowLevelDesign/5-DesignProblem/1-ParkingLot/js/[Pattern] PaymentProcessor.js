// Yes Bank
class OldPaymentProcessor {
    processPayment(amountInRupees) {
        console.log(`Deducting amount ${amountInRupees/100}`);    
    }
}

// clientCode
// const paymentGateway = new OldPaymentProcessor()
// paymentGateway.processPayment(10);


// ICICI
class NewPaymentProcessor {
    executePayment(amountInPaisa) {
        console.log(`Deducting amount ${amountInPaisa}`);
    }
}

// DIP
class PaymentAdapter{
    constructor(newPaymentProcessor) {
        this.newPaymentProcessor = newPaymentProcessor;
    }

    processPayment(amountInRupees) {
        this.newPaymentProcessor.executePayment(amountInRupees * 100)
    }
}

// OCP
const paymentProcessor = new NewPaymentProcessor();
// const paymentGateway = new OldPaymentProcessor();
const paymentGateway = new PaymentAdapter(newPaymentProcessor);
paymentGateway.processPayment(10);



