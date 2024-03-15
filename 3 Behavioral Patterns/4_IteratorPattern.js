// Iterator Pattern: 
// Provides a way to access the elements of an aggregate object sequentially without exposing its underlying representation. 
// It separates the traversal of an object from its structure.

// Aggregate interface
class Aggregate {
  createIterator() {
    throw new Error("This method must be overridden!");
  }
}

// Concrete Aggregate
class ConcreteAggregate extends Aggregate {
  constructor() {
    super();
    this.items = [];
  }

  createIterator() {
    return new ConcreteIterator(this);
  }

  get length() {
    return this.items.length;
  }

  getItem(index) {
    return this.items[index];
  }

  addItem(item) {
    this.items.push(item);
  }
}

// Iterator interface
class Iterator {
  first() {
    throw new Error("This method must be overridden!");
  }

  next() {
    throw new Error("This method must be overridden!");
  }

  isDone() {
    throw new Error("This method must be overridden!");
  }

  currentItem() {
    throw new Error("This method must be overridden!");
  }
}

// Concrete Iterator
class ConcreteIterator extends Iterator {
  constructor(aggregate) {
    super();
    this.aggregate = aggregate;
    this.currentIndex = 0;
  }

  first() {
    return this.aggregate.getItem(0);
  }

  next() {
    this.currentIndex += 1;
  }

  isDone() {
    return this.currentIndex >= this.aggregate.length;
  }

  currentItem() {
    return this.aggregate.getItem(this.currentIndex);
  }
}

// Usage
const aggregate = new ConcreteAggregate();
aggregate.addItem("Item 1");
aggregate.addItem("Item 2");
aggregate.addItem("Item 3");

const iterator = aggregate.createIterator();

while (!iterator.isDone()) {
  console.log(iterator.currentItem());
  iterator.next();
}

// Outputs:
// Item 1
// Item 2
// Item 3
