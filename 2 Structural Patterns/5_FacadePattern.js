// Facade Pattern: 
// Provides a simplified, high-level interface to a set of interfaces in a subsystem, making it easier to use for clients. 
// It simplifies the complexity of a system by providing a unified interface.

// Complex subsystem classes
class CPU {
  boot() {
    console.log('Booting the CPU...');
  }
}

class Memory {
  load() {
    console.log('Loading system into memory...');
  }
}

class HardDrive {
  read() {
    console.log('Reading data from hard drive...');
  }
}

// Facade
class ComputerFacade {
  constructor() {
    this.cpu = new CPU();
    this.memory = new Memory();
    this.hardDrive = new HardDrive();
  }

  start() {
    this.cpu.boot();
    this.memory.load();
    this.hardDrive.read();
    console.log('Computer started successfully.');
  }
}

// Usage
const computer = new ComputerFacade();
computer.start();
// Outputs:
// Booting the CPU...
// Loading system into memory...
// Reading data from hard drive...
// Computer started successfully.
