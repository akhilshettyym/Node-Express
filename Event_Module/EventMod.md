# Event Module

- **EventEmitter** is a core module in Node.js ussed to create and handle custom events.
- It is part of the events module and is often used for building **event-driven systems** in Node.js.

### Key Methods
#### .emit(eventName, [args]) - CALL
- Purpose: Emits(or triggers) and event with the specified eventName. You can also pass arguments that will be consumed by the listerns.
- It's like calling a function, but instead, it triggers all listeners(functions) attached to the specified event.

#### .on(eventName, listener) - DEFINE
- Purpose: Attaches a listener(a function) to a specific eventName. This listener will execute when the event is emitted.