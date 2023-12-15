// Define a basic class for vehicles with essential information like name, manufacturer, and ID.
class Vehicle {
  // Initialize vehicle details using the constructor.
  constructor(name, manufacturer, id) {
      this.name = name;
      this.manufacturer = manufacturer;
      this.id = id;
  }
}

// Create a specialized Car class that extends the basic Vehicle class and includes car-specific information.
class Car extends Vehicle {
  // Set up car details by utilizing the constructor and inheriting properties from the base Vehicle class.
  constructor(name, manufacturer, id, carType) {
      super(name, manufacturer, id);
      this.carType = carType;
  }
}

// Establish a Plane class as a subclass of Vehicle with additional attributes for plane-specific details.
class Plane extends Vehicle {
  // Construct a Plane object by inheriting properties from the Vehicle class and adding plane-specific information.
  constructor(name, manufacturer, id, planeType) {
      super(name, manufacturer, id);
      this.planeType = planeType;
  }
}

// Define a basic class to represent employees, including attributes like name, ID, and date of birth.
class Employee {
  // Initialize employee information through the constructor.
  constructor(name, id, dateOfBirth) {
      this.name = name;
      this.id = id;
      this.dateOfBirth = dateOfBirth;
  }
}

// Create a Driver class that extends the Employee class, incorporating additional details like a driver's license.
class Driver extends Employee {
  // Set up Driver-specific details by inheriting properties from the base Employee class and adding a driver's license ID.
  constructor(name, id, dateOfBirth, licenseID) {
      super(name, id, dateOfBirth);
      this.licenseID = licenseID;
  }
}

// Establish a Pilot class as a subclass of Employee with an extra property for a pilot's license.
class Pilot extends Employee {
  // Construct a Pilot object by inheriting properties from the Employee class and including a pilot's license ID.
  constructor(name, id, dateOfBirth, licenseID) {
      super(name, id, dateOfBirth);
      this.licenseID = licenseID;
  }
}

// Create a Reservation class to represent reservations with specific details like reservation date, employee ID, vehicle ID, and reservation ID.
class Reservation {
  // Initialize reservation details using the constructor.
  constructor(reservationDate, employeeId, vehicleId, reservationId) {
      this.reservationDate = reservationDate;
      this.employeeId = employeeId;
      this.vehicleId = vehicleId;
      this.reservationId = reservationId;
  }
}

// Generate instances of vehicles, employees, and a reservation to test the system.
const car1 = new Car("Car 1", "Manufacturer 1", 1, "Gas");
const car2 = new Car("Car 2", "Manufacturer 2", 2, "Electric");
const car3 = new Car("Car 3", "Manufacturer 3", 3, "Gas");

const plane1 = new Plane("Plane 1", "Manufacturer 4", 4, "Type 1");
const plane2 = new Plane("Plane 2", "Manufacturer 5", 5, "Type 2");

const driver1 = new Driver("Driver 1", 1, "01/01/1990", "License 1");
const driver2 = new Driver("Driver 2", 2, "02/02/1995", "License 2");
const pilot1 = new Pilot("Pilot 1", 3, "03/03/1985", "License 3");

const reservation1 = new Reservation("11/20/2023", pilot1.id, plane1.id, 1);

const reservations = [reservation1];

// Create a function to check compatibility and make a reservation.
function createReservation(employeeId, vehicleId) {
  const employee = pilot1.id === employeeId ? pilot1 : null;
  const vehicle = plane1.id === vehicleId ? plane1 : null;

  if (employee && vehicle) {
      const reservationId = reservations.length + 1;
      const reservationDate = new Date().toLocaleDateString();
      const reservation = new Reservation(reservationDate, employeeId, vehicleId, reservationId);
      reservations.push(reservation);
      console.log("Reservation created:", reservation);
  } else {
      console.log("Employee and vehicle are not compatible.");
  }
}

// Test the createReservation function with different scenarios.
createReservation(pilot1.id, car1.id);
createReservation(pilot1.id, plane1.id);

// Display the reservation list.
console.log("Print the reservation list:");
reservations.map((reservation) => {
  console.log(reservation);
});
