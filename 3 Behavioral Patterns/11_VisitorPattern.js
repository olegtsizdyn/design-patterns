// Visitor Pattern: 
// Represents an operation to be performed on the elements of an object structure. 
// It lets you define a new operation without changing the classes of the elements on which it operates.

// Element interfaces
class ComputerPart {
  accept(visitor) {
    throw new Error("This method must be overridden!");
  }
}

// Concrete elements
class Keyboard extends ComputerPart {
  accept(visitor) {
    visitor.visitKeyboard(this);
  }
}

class Monitor extends ComputerPart {
  accept(visitor) {
    visitor.visitMonitor(this);
  }
}

class Computer extends ComputerPart {
  constructor() {
    super();
    this.parts = [new Keyboard(), new Monitor()];
  }

  accept(visitor) {
    for (let part of this.parts) {
      part.accept(visitor);
    }
    visitor.visitComputer(this);
  }
}

// Visitor interface
class ComputerPartVisitor {
  visitKeyboard(keyboard) {}
  visitMonitor(monitor) {}
  visitComputer(computer) {}
}

// Concrete visitor
class DisplayVisitor extends ComputerPartVisitor {
  visitKeyboard(keyboard) {
    console.log("Displaying Keyboard.");
  }

  visitMonitor(monitor) {
    console.log("Displaying Monitor.");
  }

  visitComputer(computer) {
    console.log("Displaying Computer.");
  }
}

// Usage
const computer = new Computer();
const displayVisitor = new DisplayVisitor();

computer.accept(displayVisitor);

// Outputs:
// Displaying Keyboard.
// Displaying Monitor.
// Displaying Computer.
