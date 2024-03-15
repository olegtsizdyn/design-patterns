// State Pattern: 
// Allows an object to alter its behavior when its internal state changes. 
// The object will appear to change its class.

// State interface
class TrafficLightState {
  handle(trafficLight) {
    throw new Error("This method must be overridden!");
  }
}

// Concrete states
class RedLight extends TrafficLightState {
  handle(trafficLight) {
    console.log("Red light. Stop!");
    trafficLight.setState(new GreenLight());
  }
}

class GreenLight extends TrafficLightState {
  handle(trafficLight) {
    console.log("Green light. Go!");
    trafficLight.setState(new YellowLight());
  }
}

class YellowLight extends TrafficLightState {
  handle(trafficLight) {
    console.log("Yellow light. Slow down!");
    trafficLight.setState(new RedLight());
  }
}

// Context class
class TrafficLight {
  constructor() {
    this.state = new RedLight();
  }

  setState(state) {
    this.state = state;
  }

  change() {
    this.state.handle(this);
  }
}

// Usage
const trafficLight = new TrafficLight();

trafficLight.change();  // Outputs: Red light. Stop!
trafficLight.change();  // Outputs: Green light. Go!
trafficLight.change();  // Outputs: Yellow light. Slow down!
trafficLight.change();  // Outputs: Red light. Stop!
