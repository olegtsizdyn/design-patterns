// Factory Method Pattern: 
// Defines an interface for creating an object but lets subclasses alter the type of objects that will be created. 
// It provides an abstract method for creating objects and allows subclasses to implement this method to produce objects of various types.

class Creator {
  createProduct(type) {
    throw new Error('You have to implement the method createProduct!');
  }
}

class ConcreteCreatorA extends Creator {
  createProduct(type) {
    if (type === 'A') {
      return new ConcreteProductA();
    }
    return null;
  }
}

class ConcreteCreatorB extends Creator {
  createProduct(type) {
    if (type === 'B') {
      return new ConcreteProductB();
    }
    return null;
  }
}

class Product {
  operation() {
    throw new Error('You have to implement the method operation!');
  }
}

class ConcreteProductA extends Product {
  operation() {
    console.log('ConcreteProductA operation');
  }
}

class ConcreteProductB extends Product {
  operation() {
    console.log('ConcreteProductB operation');
  }
}

// Usage
const creatorA = new ConcreteCreatorA();
const productA = creatorA.createProduct('A');
productA.operation(); // Outputs: "ConcreteProductA operation"

const creatorB = new ConcreteCreatorB();
const productB = creatorB.createProduct('B');
productB.operation(); // Outputs: "ConcreteProductB operation"
