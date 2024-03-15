// Proxy Pattern: 
// Provides a surrogate or placeholder for another object to control access to it. 
// It can be used for various purposes, such as lazy initialization, access control, logging, and monitoring.

// Interface that both RealImage and ProxyImage implement
class Image {
  display() {
    throw new Error("This method must be overridden!");
  }
}

// RealImage class
class RealImage extends Image {
  constructor(filename) {
    super();
    this.filename = filename;
    this.loadFromDisk();
  }

  loadFromDisk() {
    console.log(`Loading ${this.filename}`);
  }

  display() {
    console.log(`Displaying ${this.filename}`);
  }
}

// ProxyImage class
class ProxyImage extends Image {
  constructor(filename) {
    super();
    this.filename = filename;
    this.realImage = null;
  }

  display() {
    if (!this.realImage) {
      this.realImage = new RealImage(this.filename);
    }
    this.realImage.display();
  }
}

// Usage
const image1 = new ProxyImage("testImage1.jpg");
const image2 = new ProxyImage("testImage2.jpg");

image1.display(); // Here, the image is loaded and displayed.
// Outputs:
// Loading testImage1.jpg
// Displaying testImage1.jpg

image1.display(); // This time, the previously loaded image is displayed without loading it again.
// Outputs:
// Displaying testImage1.jpg

image2.display();
// Outputs:
// Loading testImage2.jpg
// Displaying testImage2.jpg
