// Prototype Pattern: 
// Creates new objects by copying an existing object, known as the prototype. 
// This pattern is useful when the cost of creating an object is more expensive or complex than copying an existing one.

// Define a prototype object
function CarPrototype() {
  this.make = 'Generic';
  this.model = 'Model';
  this.year = 2000;

  this.drive = function() {
    console.log(this.make + ' ' + this.model + ' is driving.');
  }

  this.clone = function() {
    const clonedCar = Object.create(Object.getPrototypeOf(this));
    for (let attr in this) {
      if (this.hasOwnProperty(attr)) {
        clonedCar[attr] = this[attr];
      }
    }
    return clonedCar;
  }
}

// Create an instance and customize it
const myCar = new CarPrototype();
myCar.make = 'Toyota';
myCar.model = 'Camry';
myCar.year = 2022;

// Clone the instance
const clonedCar = myCar.clone();

// Test
myCar.drive(); // Outputs: "Toyota Camry is driving."
clonedCar.drive(); // Outputs: "Toyota Camry is driving."

console.log(myCar === clonedCar); // Outputs: false, they are different objects but share the same properties and values
