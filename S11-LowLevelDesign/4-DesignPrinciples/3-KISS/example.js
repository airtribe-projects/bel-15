const processOrder = (order) => {
    if (order.isValid()) {
        if(order.getItems.size() > 0) {
            for (item of order.getItems()) {
                if (item.isAvailable()) {
                    item.process()
                } else {
                    item.removeFromCart()
                }
            }
            order.confirm()
        } else {
            order.cancel()
        }
    }
}

const processItems = (items) => {
    for (const item of items) {
        item.isAvailable() ? item.process() : item.removeFromCart();
    }
};

const processOrderKISS = (order) => {
    if (!order.isValid()) {
        return;
    }

    if (order.getItems.size() === 0) {
        order.cancel();
        return;
    }

    processItems(order.getItems());
    order.confirm();
}





