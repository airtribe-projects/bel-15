class Address {
    constructor(street, city) {
        this.street = street;
        this.city = city;
    }

    getCity() {
        return this.city;
    }
}

// Has - A (Weak)
class Customer {
    constructor(name, address, currentAddress) {
        this.name = name;
        this.address = address;
        this.currentAddress = currentAddress;
    }
    
    getAddress() {
        return this.currentAddress;
    }

    getPermanentAddress() {
        return this.address;
    }


}

// Current Address
class Order {
    constructor(customer) {
        this.customer = customer;
    }
    
    printShipingCity() {
        console.log(this.customer.address.city);
    }
}


class OrderLOD {
    constructor(customer) {
        this.customer = customer;
    }
    
    printShipingCity() {
        console.log(this.customer.getAddress());
    }
}



