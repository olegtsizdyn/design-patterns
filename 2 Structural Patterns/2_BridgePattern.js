// Bridge Pattern: 
// Separates an object's abstraction from its implementation so that the two can vary independently. 
// This pattern is useful when you want to avoid a permanent binding between an abstraction and its implementation.

// Implementor
class Device {
  turnOn() {
    throw new Error("You must implement the method turnOn!");
  }

  turnOff() {
    throw new Error("You must implement the method turnOff!");
  }
}

// Concrete Implementors
class TV extends Device {
  turnOn() {
    console.log("TV is now on.");
  }

  turnOff() {
    console.log("TV is now off.");
  }
}

class Radio extends Device {
  turnOn() {
    console.log("Radio is now on.");
  }

  turnOff() {
    console.log("Radio is now off.");
  }
}

// Abstraction
class RemoteControl {
  constructor(device) {
    this.device = device;
  }

  pressOnButton() {
    this.device.turnOn();
  }

  pressOffButton() {
    this.device.turnOff();
  }
}

// Refined Abstraction (optional)
class AdvancedRemoteControl extends RemoteControl {
  mute() {
    console.log("Device is now muted.");
  }
}

// Usage
const tv = new TV();
const radio = new Radio();

const remoteForTV = new RemoteControl(tv);
remoteForTV.pressOnButton();   // Outputs: "TV is now on."
remoteForTV.pressOffButton();  // Outputs: "TV is now off."

const advancedRemoteForRadio = new AdvancedRemoteControl(radio);
advancedRemoteForRadio.pressOnButton();   // Outputs: "Radio is now on."
advancedRemoteForRadio.mute();            // Outputs: "Device is now muted."
