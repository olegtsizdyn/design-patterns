// Observer Pattern: 
// Defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically. 
// It's commonly used in event handling systems.

// Subject class
class Newsletter {
  constructor() {
    this.subscribers = [];
    this.latestArticle = null;
  }

  subscribe(observer) {
    this.subscribers.push(observer);
  }

  unsubscribe(observer) {
    const index = this.subscribers.indexOf(observer);
    if (index !== -1) {
      this.subscribers.splice(index, 1);
    }
  }

  notify() {
    for (let observer of this.subscribers) {
      observer.update(this.latestArticle);
    }
  }

  publishArticle(article) {
    this.latestArticle = article;
    this.notify();
  }
}

// Observer interface
class Subscriber {
  update(article) {
    throw new Error("This method must be overridden!");
  }
}

// Concrete observers
class EmailSubscriber extends Subscriber {
  constructor(email) {
    super();
    this.email = email;
  }

  update(article) {
    console.log(`Email sent to ${this.email}: New article published - ${article}`);
  }
}

class SMSSubscriber extends Subscriber {
  constructor(phoneNumber) {
    super();
    this.phoneNumber = phoneNumber;
  }

  update(article) {
    console.log(`SMS sent to ${this.phoneNumber}: New article published - ${article}`);
  }
}

// Usage
const newsletter = new Newsletter();

const subscriber1 = new EmailSubscriber("example1@email.com");
const subscriber2 = new SMSSubscriber("123-456-7890");

newsletter.subscribe(subscriber1);
newsletter.subscribe(subscriber2);

newsletter.publishArticle("Understanding the Observer Pattern");

// Outputs:
// Email sent to example1@email.com: New article published - Understanding the Observer Pattern
// SMS sent to 123-456-7890: New article published - Understanding the Observer Pattern
