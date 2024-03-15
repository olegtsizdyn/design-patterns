// Abstract Factory Pattern: 
// Provides an interface for creating families of related or dependent objects without specifying their concrete classes. 
// It's useful when you need to ensure that the created objects work together harmoniously.

// Abstract Factory 
class UIFactory {
  createButton() {
    throw new Error("You have to implement the method createButton!");
  }

  createPanel() {
    throw new Error("You have to implement the method createPanel!");
  }
}

// Concrete Factory 1: Light Theme
class LightUIFactory extends UIFactory {
  createButton() {
    return new LightButton();
  }

  createPanel() {
    return new LightPanel();
  }
}

// Concrete Factory 2: Dark Theme
class DarkUIFactory extends UIFactory {
  createButton() {
    return new DarkButton();
  }

  createPanel() {
    return new DarkPanel();
  }
}

// Abstract Product A: Button
class Button {
  render() {
    throw new Error("You have to implement the method render!");
  }
}

// Concrete Product A1: LightButton
class LightButton extends Button {
  render() {
    console.log("Rendering Light Theme Button");
  }
}

// Concrete Product A2: DarkButton
class DarkButton extends Button {
  render() {
    console.log("Rendering Dark Theme Button");
  }
}

// Abstract Product B: Panel
class Panel {
  display() {
    throw new Error("You have to implement the method display!");
  }
}

// Concrete Product B1: LightPanel
class LightPanel extends Panel {
  display() {
    console.log("Displaying Light Theme Panel");
  }
}

// Concrete Product B2: DarkPanel
class DarkPanel extends Panel {
  display() {
    console.log("Displaying Dark Theme Panel");
  }
}

// Usage
const lightFactory = new LightUIFactory();
const darkFactory = new DarkUIFactory();

const lightButton = lightFactory.createButton();
const darkButton = darkFactory.createButton();
lightButton.render(); // Outputs: "Rendering Light Theme Button"
darkButton.render(); // Outputs: "Rendering Dark Theme Button"

const lightPanel = lightFactory.createPanel();
const darkPanel = darkFactory.createPanel();
lightPanel.display(); // Outputs: "Displaying Light Theme Panel"
darkPanel.display(); // Outputs: "Displaying Dark Theme Panel"
