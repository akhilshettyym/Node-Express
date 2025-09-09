// Import EventEmitter class
const EventEmitter = require('events')
// Create an instance of EventEmitter

const emitter = new EventEmitter();

// 1. Define an event listener (addListener)

// emitter.on("greet", () => {
//     console.log("Hello Akhil");
// })

// 2. Trigger (emit) the "greet" event
// emitter.emit("greet");


/* We can use the above with arguements as 

emitter.on("greet", (userName) => {
    console.log(`hello ${userName}`);
});
emitter.emit("greet", "Akhil Shetty");
But Passing two arguements is not feasible or recommeneded.

*/
emitter.on("greet", (args) => {
    console.log(`Hello I am ${args.name} a ${args.prof}`);
});
emitter.emit("greet", { name: "Akhil Shetty", prof: "Full Stack Dev" });