// Mediator Pattern: 
// Defines an object that centralizes communication between a set of objects, promoting loose coupling among them. 
// It helps reduce the dependencies between objects in a system.

// Mediator class
class ChatRoom {
  constructor() {
    this.users = {};
  }

  register(user) {
    this.users[user.name] = user;
    user.setChatRoom(this);
  }

  send(message, fromUser, toUserName) {
    if (this.users[toUserName]) {
      this.users[toUserName].receive(message, fromUser);
    } else {
      console.log(`User ${toUserName} not found`);
    }
  }
}

// Colleague class (user in the chatroom)
class User {
  constructor(name) {
    this.name = name;
    this.chatRoom = null;
  }

  setChatRoom(chatRoom) {
    this.chatRoom = chatRoom;
  }

  send(message, toUserName) {
    this.chatRoom.send(message, this, toUserName);
  }

  receive(message, fromUser) {
    console.log(`${fromUser.name} to ${this.name}: ${message}`);
  }
}

// Usage
const chatRoom = new ChatRoom();

const john = new User("John");
const alice = new User("Alice");
const bob = new User("Bob");

chatRoom.register(john);
chatRoom.register(alice);
chatRoom.register(bob);

john.send("Hi Alice!", "Alice");
alice.send("Hey John!", "John");
bob.send("Hello everyone!", "John");  // This will output: User John not found, as it tries to send a message to a user named "everyone", which doesn't exist.

// Outputs:
// John to Alice: Hi Alice!
// Alice to John: Hey John!
