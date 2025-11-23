class OrderProcessingService {
    
    constructor(paymentService, notificationService) {
        this.paymenetService = paymentService;
        this.notificationService = notificationService;
    }

    createOrder(orderDetails) {
        // Logic to create an order
        console.log("Order creted", orderDetails);
    }

    processPayments(orderId, paymentDetails) {
        this.paymenetService.processPayments(orderId, paymentDetails);
        console.log("Payment Done", paymentDetails, orderId);
    }

    sendEmailConfirmation(orderId, email) {
        // Logic to send Email confirmation
        // Connect to some SMTP server
        // fetch email template
        // fetch customer data for order
        // send the email

        this.notificationService.sendEmail(email, content);
        console.log("Payment Done", paymentDetails, orderId);
    }
}


class PaymentService {
    processPayments(orderId, paymentDetails) {
        // All logic related to payments
    }
}

class NotificationService {
    sendEmail(emailid, content) {

    }
    sendSMS(number, content) {

    }
}

const ps = new PaymentService();
const ns = new NotificationService();

const OrderService = new OrderProcessingService(ps, ns)