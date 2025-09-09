/* Objective
Create a program using Node.js EventEmitter that:
- Listens for multiple types of user events (e.g., login, logout, purchase, and profile update).
- Tracks how many times each event is emitted.
- Logs a summary of all event occurances when a special summary event is triggered.

Requirements :
- Create atleast four custom events (e.g., user-login, user-logout, user-purchase, profile-update).
- Emit these events multiple times with different arguements (e.g., username, items purchased).
- Track and store the count of each event type.
- Define a summary event that logs a detailed report of how-many times each event was triggered. */

const EventEmitter = require("events");
const emitter = new EventEmitter();

const eventCounts = {
    "user-login": 0,
    "user-logout": 0,
    "user-purchase": 0,
    "profile-update": 0,
}

emitter.on("user-login", (username) => {
    eventCounts["user-login"]++;
    console.log(`${username} logged in...`);
});

emitter.on("user-purchase", (username, item) => {
    eventCounts["user-purchase"]++;
    console.log(`${username} purchased ${item} !`);
})

emitter.on("profile-update", (username, field) => {
    eventCounts["profile-update"]++;
    console.log(`${username} updated their ${field} !`);
})

emitter.on("user-logout", (username) => {
    eventCounts["user-logout"]++;
    console.log(`${username} logged out`);
})

emitter.on("summary", () => {
    console.log(eventCounts);
})

// Emit events
emitter.emit("user-login", "Akhil");
emitter.emit("user-purchase", "Akhil", "Mobile");
emitter.emit("profile-update", "Akhil", "Email");
emitter.emit("user-logout", "Akhil");

// show summary
emitter.emit("summary");