// Interpreter Pattern: 
// Defines a grammar for interpreting a language and provides an interpreter to evaluate sentences in that language.

// Abstract expression
class Expression {
  interpret(context) {
    throw new Error("This method must be overridden!");
  }
}

// Terminal expression for numbers
class NumberExpression extends Expression {
  constructor(value) {
    super();
    this.value = value;
  }

  interpret() {
    return this.value;
  }
}

// Non-terminal expression for addition
class AddExpression extends Expression {
  constructor(leftExpression, rightExpression) {
    super();
    this.leftExpression = leftExpression;
    this.rightExpression = rightExpression;
  }

  interpret() {
    return this.leftExpression.interpret() + this.rightExpression.interpret();
  }
}

// Non-terminal expression for subtraction
class SubtractExpression extends Expression {
  constructor(leftExpression, rightExpression) {
    super();
    this.leftExpression = leftExpression;
    this.rightExpression = rightExpression;
  }

  interpret() {
    return this.leftExpression.interpret() - this.rightExpression.interpret();
  }
}

// A simple client code to evaluate the expression: `5 + 3 - 2`
const five = new NumberExpression(5);
const three = new NumberExpression(3);
const two = new NumberExpression(2);

const addition = new AddExpression(five, three);
const resultExpression = new SubtractExpression(addition, two);

console.log(resultExpression.interpret());  // Outputs: 6
