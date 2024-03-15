// Command Pattern: 
// Encapsulates a request as an object, thereby allowing for parameterization of clients with queues, requests, and operations. 
// It also supports undoable operations.

// Command interface
class Command {
  execute() {
    throw new Error("This method must be overridden!");
  }
}

// Concrete commands
class LightOnCommand extends Command {
  constructor(light) {
    super();
    this.light = light;
  }

  execute() {
    this.light.turnOn();
  }
}

class LightOffCommand extends Command {
  constructor(light) {
    super();
    this.light = light;
  }

  execute() {
    this.light.turnOff();
  }
}

// Receiver class
class Light {
  turnOn() {
    console.log("Light is ON");
  }

  turnOff() {
    console.log("Light is OFF");
  }
}

// Invoker class
class RemoteControl {
  setCommand(command) {
    this.command = command;
  }

  pressButton() {
    this.command.execute();
  }
}

// Usage
const light = new Light();
const lightOnCommand = new LightOnCommand(light);
const lightOffCommand = new LightOffCommand(light);

const remote = new RemoteControl();

remote.setCommand(lightOnCommand);
remote.pressButton();  // Outputs: Light is ON

remote.setCommand(lightOffCommand);
remote.pressButton();  // Outputs: Light is OFF
