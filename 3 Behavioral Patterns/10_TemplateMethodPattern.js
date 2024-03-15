// Template Method Pattern: 
// Defines the skeleton of an algorithm in the superclass but lets subclasses override specific steps of the algorithm without changing its structure.

// Abstract class with the template method
class Beverage {
  prepare() {
    this.boilWater();
    this.brew();
    this.pourInCup();
    this.addCondiments();
  }

  boilWater() {
    console.log("Boiling water");
  }

  brew() {
    throw new Error("This method must be overridden!");
  }

  pourInCup() {
    console.log("Pouring into cup");
  }

  addCondiments() {
    throw new Error("This method must be overridden!");
  }
}

// Concrete classes
class Coffee extends Beverage {
  brew() {
    console.log("Brewing coffee grounds");
  }

  addCondiments() {
    console.log("Adding sugar and milk");
  }
}

class Tea extends Beverage {
  brew() {
    console.log("Steeping tea bag");
  }

  addCondiments() {
    console.log("Adding lemon");
  }
}

// Usage
const coffee = new Coffee();
coffee.prepare();

console.log("-----");

const tea = new Tea();
tea.prepare();

// Outputs:
// Boiling water
// Brewing coffee grounds
// Pouring into cup
// Adding sugar and milk
// -----
// Boiling water
// Steeping tea bag
// Pouring into cup
// Adding lemon
