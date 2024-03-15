// Memento Pattern: 
// Captures and externalizes an object's internal state so the object can be restored to this state later. 
// It's often used for implementing undo mechanisms.

// Memento class
class Memento {
  constructor(state) {
    this.state = state;
  }

  getState() {
    return this.state;
  }
}

// Originator class
class Editor {
  constructor(content) {
    this.content = content;
  }

  setContent(content) {
    this.content = content;
  }

  getContent() {
    return this.content;
  }

  save() {
    return new Memento(this.content);
  }

  restore(memento) {
    this.content = memento.getState();
  }
}

// Caretaker class
class History {
  constructor() {
    this.mementos = [];
  }

  push(memento) {
    this.mementos.push(memento);
  }

  pop() {
    return this.mementos.pop();
  }
}

// Usage
const editor = new Editor("First line.");
const history = new History();

console.log(editor.getContent());  // Outputs: First line.
history.push(editor.save());

editor.setContent("Second line.");
console.log(editor.getContent());  // Outputs: Second line.
history.push(editor.save());

editor.setContent("Third line.");
console.log(editor.getContent());  // Outputs: Third line.

// Let's undo
editor.restore(history.pop());
console.log(editor.getContent());  // Outputs: Second line.

editor.restore(history.pop());
console.log(editor.getContent());  // Outputs: First line.
