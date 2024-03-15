// Singleton Pattern: 
// Ensures that a class has only one instance and provides a global point of access to that instance. 
// This is useful when exactly one object is needed to coordinate actions across the system, such as a configuration manager or a logging service.

const Singleton = (function() {
    let instance; // this will hold the single instance of our object

    function createInstance() {
        let object = new Object("I am the instance");
        return object;
    }

    return {
        getInstance: function() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

// Usage
let instance1 = Singleton.getInstance();
let instance2 = Singleton.getInstance();

console.log(instance1 === instance2);  // true, meaning both variables hold the same instance