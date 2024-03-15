// Decorator Pattern:
// Attaches additional responsibilities to objects dynamically. 
// Decorators provide a flexible alternative to subclassing for extending functionality.

// Component
class Coffee {
  cost() {
    return 5;
  }

  description() {
    return "Basic Coffee";
  }
}

// First Decorator
class MilkDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }

  cost() {
    return this.coffee.cost() + 2;
  }

  description() {
    return this.coffee.description() + ", with milk";
  }
}

// Second Decorator
class WhippedCreamDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }

  cost() {
    return this.coffee.cost() + 3;
  }

  description() {
    return this.coffee.description() + ", with whipped cream";
  }
}

// Usage
let myCoffee = new Coffee();
console.log(myCoffee.cost()); // Outputs: 5
console.log(myCoffee.description()); // Outputs: Basic Coffee

myCoffee = new MilkDecorator(myCoffee);
console.log(myCoffee.cost()); // Outputs: 7
console.log(myCoffee.description()); // Outputs: Basic Coffee, with milk

myCoffee = new WhippedCreamDecorator(myCoffee);
console.log(myCoffee.cost()); // Outputs: 10
console.log(myCoffee.description()); // Outputs: Basic Coffee, with milk, with whipped cream
