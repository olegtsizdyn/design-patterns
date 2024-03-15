// Strategy Pattern: 
// Defines a family of algorithms, encapsulates each one, and makes them interchangeable. 
// It lets the algorithm vary independently from clients that use it.

// Strategy interface
class DiscountStrategy {
  apply(price) {
    throw new Error("This method must be overridden!");
  }
}

// Concrete strategies
class NoDiscount extends DiscountStrategy {
  apply(price) {
    return price;
  }
}

class FivePercentDiscount extends DiscountStrategy {
  apply(price) {
    return price * 0.95;  // 5% discount
  }
}

class TenPercentDiscount extends DiscountStrategy {
  apply(price) {
    return price * 0.90;  // 10% discount
  }
}

class FiftyPercentDiscount extends DiscountStrategy {
  apply(price) {
    return price * 0.50;  // 50% discount
  }
}

// Context class
class ShoppingCart {
  constructor(strategy = new NoDiscount()) {
    this.items = [];
    this.discountStrategy = strategy;
  }

  add(item, price) {
    this.items.push({ item, price });
  }

  setStrategy(strategy) {
    this.discountStrategy = strategy;
  }

  checkout() {
    let total = 0;
    for (let i = 0; i < this.items.length; i++) {
      total += this.items[i].price;
    }
    return this.discountStrategy.apply(total);
  }
}

// Usage
const cart = new ShoppingCart();
cart.add("Book", 20);
cart.add("T-Shirt", 30);
console.log(cart.checkout());  // Outputs: 50 (No discount applied)

cart.setStrategy(new TenPercentDiscount());
console.log(cart.checkout());  // Outputs: 45 (10% discount applied)

cart.setStrategy(new FiftyPercentDiscount());
console.log(cart.checkout());  // Outputs: 25 (50% discount applied)
