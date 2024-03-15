// Composite Pattern: 
// Composes objects into tree structures to represent part-whole hierarchies. 
// It allows clients to treat individual objects and compositions of objects uniformly.

// Component
class Graphic {
  draw() {
    throw new Error("You must implement the draw method!");
  }
}

// Leaf
class Dot extends Graphic {
  constructor(x, y) {
    super();
    this.x = x;
    this.y = y;
  }

  draw() {
    console.log(`Drawing a dot at position (${this.x}, ${this.y})`);
  }
}

// Leaf
class Circle extends Graphic {
  constructor(x, y, radius) {
    super();
    this.x = x;
    this.y = y;
    this.radius = radius;
  }

  draw() {
    console.log(`Drawing a circle at position (${this.x}, ${this.y}) with radius ${this.radius}`);
  }
}

// Composite
class CompoundGraphic extends Graphic {
  constructor() {
    super();
    this.children = [];
  }

  add(child) {
    this.children.push(child);
  }

  remove(child) {
    const index = this.children.indexOf(child);
    if (index > -1) {
      this.children.splice(index, 1);
    }
  }

  draw() {
    this.children.forEach(child => child.draw());
  }
}

// Usage
const dot1 = new Dot(1, 2);
const dot2 = new Dot(3, 4);
const circle1 = new Circle(5, 6, 10);

const compound = new CompoundGraphic();
compound.add(dot1);
compound.add(dot2);
compound.add(circle1);

compound.draw();
// Outputs:
// Drawing a dot at position (1, 2)
// Drawing a dot at position (3, 4)
// Drawing a circle at position (5, 6) with radius 10
