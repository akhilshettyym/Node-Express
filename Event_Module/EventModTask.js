const fs = require("fs");
const EventEmitter = require("events");
const emitter = new EventEmitter();

const filePath = "./EventModTask.json";

let eventCounts = {};
if (fs.existsSync(filePath)) {
    eventCounts = JSON.parse(fs.readFileSync(filePath, "utf-8"));
} else {
    eventCounts = {
        "user-login": 0,
        "user-logout": 0,
        "user-purchase": 0,
        "profile-update": 0,
    };
}

function saveCounts() {
    fs.writeFileSync(filePath, JSON.stringify(eventCounts, null, 2));
}

// Event listeners
emitter.on("user-login", (username) => {
    eventCounts["user-login"]++;
    console.log(`${username} logged in...`);
    saveCounts();
});

emitter.on("user-purchase", (username, item) => {
    eventCounts["user-purchase"]++;
    console.log(`${username} purchased ${item} !`);
    saveCounts();
});

emitter.on("profile-update", (username, field) => {
    eventCounts["profile-update"]++;
    console.log(`${username} updated their ${field} !`);
    saveCounts();
});

emitter.on("user-logout", (username) => {
    eventCounts["user-logout"]++;
    console.log(`${username} logged out`);
    saveCounts();
});

emitter.on("summary", () => {
    console.log("Event Summary:");
    console.log(eventCounts);
});

// Emit events
emitter.emit("user-login", "Akhil");
emitter.emit("user-purchase", "Akhil", "Mobile");
emitter.emit("profile-update", "Akhil", "Email");
emitter.emit("user-logout", "Akhil");

// show summary
emitter.emit("summary");