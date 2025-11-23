


interface CreditCardPaymentProcessor {
    processCreditCard(amount: number): void;
}

interface DebitCardPaymentProcessor {
    processDebitCard(amount: number): void;
}

interface PayPalPaymentProcessor {
    processPayPal(amount: number): void;
}

interface BankTransferPaymentProcessor {
    processBankTransfer(amount: number): void;
}

class CreditCardPayment implements CreditCardPaymentProcessor {
    processCreditCard(amount: number): void {
        console.log(`Processing credit card payment of $${amount}`);
    }
}

class DebitCardPayment implements DebitCardPaymentProcessor {
    processDebitCard(amount: number): void {
        console.log(`Processing debit card payment of $${amount}`);
    }
}

class PayPalPayment implements PayPalPaymentProcessor {
    processPayPal(amount: number): void {
        console.log(`Processing PayPal payment of $${amount}`);
    }
}
