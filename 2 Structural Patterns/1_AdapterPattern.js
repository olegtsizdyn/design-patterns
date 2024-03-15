// Adapter Pattern: 
// Allows the interface of an existing class to be used as another interface. 
// It is often used to make existing classes work with others without modifying their source code.

// Old Printer (legacy code that you might not want to modify)
class OldPrinter {
  print(content) {
    console.log(`Printing: ${content}`);
  }
}

// Advanced Printer with different methods
class AdvancedPrinter {
  advancedPrint(content) {
    console.log(`Advanced Printing: ${content}`);
  }

  scan(content) {
    console.log(`Scanning: ${content}`);
  }
}

// Adapter to make AdvancedPrinter's interface compatible with OldPrinter's
class PrinterAdapter {
  constructor(advancedPrinter) {
    this.advancedPrinter = advancedPrinter;
  }

  print(content) {
    this.advancedPrinter.advancedPrint(content);
  }
}

// Usage
const oldPrinter = new OldPrinter();
oldPrinter.print("Hello, World!"); // Outputs: "Printing: Hello, World!"

const advancedPrinter = new AdvancedPrinter();
const adaptedAdvancedPrinter = new PrinterAdapter(advancedPrinter);
adaptedAdvancedPrinter.print("Hello, World!"); // Outputs: "Advanced Printing: Hello, World!"

// Using the advanced features which aren't adapted
advancedPrinter.scan("Document to scan"); // Outputs: "Scanning: Document to scan"
