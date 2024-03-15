// Builder Pattern: 
// Separates the construction of a complex object from its representation, allowing the same construction process to create various representations. 
// It's often used when an object has a large number of parameters, and you want to make it easier to create instances of that object.

// Product to be built
class Meal {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  showItems() {
    this.items.forEach(item => {
      console.log(`Item: ${item.name()}, Price: ${item.price()}`);
    });
  }

  getCost() {
    return this.items.reduce((sum, item) => sum + item.price(), 0);
  }
}

// Items in the meal with their interfaces
class Item {
  name() {
    throw new Error('You have to implement the method name!');
  }

  price() {
    throw new Error('You have to implement the method price!');
  }
}

class Burger extends Item {}
class Drink extends Item {}

class VegBurger extends Burger {
  name() {
    return "Veg Burger";
  }

  price() {
    return 5.5;
  }
}

class Coke extends Drink {
  name() {
    return "Coke";
  }

  price() {
    return 2.0;
  }
}

class Pepsi extends Drink {
  name() {
    return "Pepsi";
  }

  price() {
    return 1.8;
  }
}

// Builder to build the Meal
class MealBuilder {
  prepareVegMeal() {
    const meal = new Meal();
    meal.addItem(new VegBurger());
    meal.addItem(new Coke());
    return meal;
  }

  prepareNonVegMeal() {
    const meal = new Meal();
    meal.addItem(new VegBurger());
    meal.addItem(new Pepsi());
    return meal;
  }
}

// Usage
const mealBuilder = new MealBuilder();

const vegMeal = mealBuilder.prepareVegMeal();
console.log("Veg Meal");
vegMeal.showItems();
console.log("Total Cost: " + vegMeal.getCost());

const nonVegMeal = mealBuilder.prepareNonVegMeal();
console.log("\nNon-Veg Meal");
nonVegMeal.showItems();
console.log("Total Cost: " + nonVegMeal.getCost());
