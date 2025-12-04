45 minutes

### Requirement Gathering (5-10)
- Ability to park vehicle
- How many vehicles can be parked at a time: 500
- Type of Vehicles: 2W, 3W, 4W, 
- Type of spots: Handicapped, EV, Normal, Ladies
- How many gates? one entry and one exit
- How many floors does tha parking lot: Dynamic / 5
- How long does a vehicle stay in PL: Infinite
    - Payment rules
    - Hourly, daily 
- Schedule your parking: No
- Do we offer a dedicated parking spot: No
- Go 
- Do we need Man power: No
- Support for Parking Spot Sensor: No
- Configurable Parking Spots: 
    - Add more parking spot: No
    - Spot on maintainence: Yes
- Security Cameras: No
- Parking Lot Timings: 24*7*365
- Parking Tickets: Yes
- Display Board: 
- EntryGate
- ExitGate
- DirectionBoard: Printed Directions
- Realtime communication?  
- Emergency Exit: No
- 

#### Non functional requirements:
- Performance
- Scaling
- Low Coupling
- High Cohesion
- Maintainable
- Extensible ==> Cinemahall, Airport

### Identifiy the entities of the system (2-3)
- Vehicle
- VehicleType
- PaymentProcessor
- ParkingSpot
- EntryGate
- ExitGate
- ParkingFloor
- ParkingTicket
- ParkingLot
- DisplayBoard

### Detail Design of Entities (20-30 minutes)
#### Vechile
- Vehicle: Car, Truck, Bike, Auto
- vehicleType: ENUM ["2W", "3W", "4W"]
- specialities: ["EV", "Ladies", "Normal", "Handicapped"]
- HAS-A relationship with Parking Ticket
- registrationNumber
- owner

#### ParkingSpot
- id:
- type: 
- occupied:
- speciality: ["EV", "Ladies", "Normal", "Handicapped"] // Optional
- [Optional] Would it have a relationship with vehicle 
- isClosed: T/F

+ parkVechicle()
+ unparkVechicle()
+ setForMaintainence()
+ removeForMaintainence()

NFR:
- Algorithm: 
    -- Nearest first, 
    -- Make use of vacant available, first spot
    -- Park Anywhere() --> Dummy spot

### ParkingFloor
- Spots: [] HAS-A (Strong / weak) relationship with Parking spot
- DisplayPanel: HAS-A (Weak)
- One - many with ParkingSpot
- capacity: 
- id: 
- isClosed: 
- AvailableSpot:


+ getSpotToParkVechicle(vehicle)
+ setForMaintainence()
+ removeForMaintainence()
+ getTotalFreeSpots()
+ isAvaialble()

### ParkingLot
- id 
- name
- address
- totalFloors
- displayPanel
- entryGate
- exitGate
- Floors (Has-A )

+ isFull(): 
+ parkVechicle(vehicle)
+ exitVehicle(vehicle)

### EntryGate
--> It should process a vechicle and generate a ticket which could be handed over to vehicle
- getSpotToParkVehicle(parkingFloors, vehicle):

+ generateTicket(vehicle): ParkingTicket
--  


### ParkingTicket
- HAS-A vehicle
- HAS-A Floor
- HAS-A Spot

- vehicle
- floor
- spot
- id
- entryTime
- exitTime



### ExitGate
- paymentProcessor
+ checkout(ticket)
+ calculateAmountToBePaid()

### DisplayPanel
+ show(text)



### Class Diagram (5 minutes)



### Implement some core functions
--> Land you to a DSA proble


Main

Access to parkingFloor 
Set this parkingFloor under maintainence



Telscoping Constructor: 

// Dummy Code
class Burger {
    constructor(String bun) { ... }
    constructor(String bun, String patty) { ... }
    constructor(String bun, String patty, String cheese) { ... }
    constructor(String bun, String patty, String cheese, boolean lettuce) { ... }
}

