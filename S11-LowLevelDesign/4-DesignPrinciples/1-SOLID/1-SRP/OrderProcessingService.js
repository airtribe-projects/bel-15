class OrderProcessingService {
    createOrder(orderDetails) {
        // Logic to create an order
        console.log("Order creted", orderDetails);
    }

    processPayments(orderId, paymentDetails) {
        // Logic to process payments
        // CC, DC 
        console.log("Payment Done", paymentDetails, orderId);
    }

    sendEmailConfirmation(orderId, email) {
        // Logic to send Email confirmation
        // Connect to some SMTP server
        // fetch email template
        // fetch customer data for order
        // send the email
        console.log("Payment Done", paymentDetails, orderId);
    }
}

/* Responsibility:
Managing orders
Managing payments
Managing emails
*/

const OrderService = new OrderProcessingService()

