// Chain of Responsibility Pattern: 
// Passes a request along a chain of handlers. 
// Each handler decides either to process the request or to pass it to the next handler in the chain.

class Logger {
  constructor(level) {
    this.level = level;
    this.nextLogger = null;
  }

  setNextLogger(nextLogger) {
    this.nextLogger = nextLogger;
  }

  logMessage(messageLevel, message) {
    if (this.level <= messageLevel) {
      this.write(message);
    }
    if (this.nextLogger) {
      this.nextLogger.logMessage(messageLevel, message);
    }
  }

  write(message) {
    throw new Error("This method must be overridden!");
  }
}

// Concrete loggers
class ConsoleLogger extends Logger {
  constructor(level) {
    super(level);
  }

  write(message) {
    console.log(`Console Logger: ${message}`);
  }
}

class FileLogger extends Logger {
  constructor(level) {
    super(level);
  }

  write(message) {
    console.log(`File Logger: ${message}`);
  }
}

class ErrorLogger extends Logger {
  constructor(level) {
    super(level);
  }

  write(message) {
    console.log(`Error Logger: ${message}`);
  }
}

// Levels
const LEVELS = {
  INFO: 1,
  DEBUG: 2,
  ERROR: 3,
};

// Usage
const errorLogger = new ErrorLogger(LEVELS.ERROR);
const fileLogger = new FileLogger(LEVELS.DEBUG);
const consoleLogger = new ConsoleLogger(LEVELS.INFO);

errorLogger.setNextLogger(fileLogger);
fileLogger.setNextLogger(consoleLogger);

errorLogger.logMessage(LEVELS.INFO, "This is an informational message.");
// Outputs:
// Console Logger: This is an informational message.

errorLogger.logMessage(LEVELS.DEBUG, "This is a debug message.");
// Outputs:
// File Logger: This is a debug message.
// Console Logger: This is a debug message.

errorLogger.logMessage(LEVELS.ERROR, "This is an error message.");
// Outputs:
// Error Logger: This is an error message.
// File Logger: This is an error message.
// Console Logger: This is an error message.
