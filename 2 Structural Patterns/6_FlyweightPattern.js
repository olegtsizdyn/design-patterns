// Flyweight Pattern: 
// Minimizes memory usage or computational expenses by sharing as much as possible with similar objects. 
// It is used when a large number of similar objects need to be created and optimized for performance and memory usage.

// Flyweight class
class Character {
  constructor(char) {
    this.char = char;
  }

  render(font) {
    console.log(`Rendering character ${this.char} with font ${font}`);
  }
}

// Flyweight factory
class CharacterFactory {
  constructor() {
    this.characters = {};
  }

  getCharacter(char) {
    if (!this.characters[char]) {
      this.characters[char] = new Character(char);
    }
    return this.characters[char];
  }
}

// Usage
const factory = new CharacterFactory();

// Assuming we have a text "AABBC"
const text = "AABBC";
const fonts = ["Arial", "Times New Roman"];  // just to illustrate the external state

for (let font of fonts) {
  for (let char of text) {
    const character = factory.getCharacter(char);
    character.render(font);
  }
}

// Outputs:
// Rendering character A with font Arial
// Rendering character A with font Arial
// Rendering character B with font Arial
// Rendering character B with font Arial
// Rendering character C with font Arial
// Rendering character A with font Times New Roman
// ... and so on for other characters
