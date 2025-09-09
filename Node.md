# Node.JS
### Open-source cross-platoform JavaScript runtime env that runs outside the browser.
#### Node.js is not a programming language or a framework, but rather a JS runtime env that allows developers to run JS outside of a browser.

## What is Node.js ?
- Open-source cross platform server-side JavaScript runtime.
- Allows us to run JavaScript on our machine or servers.
- Built on V8 JavaScript engine for speed.
- Robust ecosystem with npm.

### Open Source :
- The source code for this platform is publicly available.
Anyone can :
- View : We can check out how nodeJs is build under the hood.
- Modify : We can customize Node.js.
- Contribute : Developers ard the world actively contribute to improving Node.js.

### Cross-Platform :
Node.js can run on multiple Operating systems without needing major changes.

### JavaScript runtime env: 
Environment where JavaScript code runs.
- In Browsers: JS typically runs in the browser(like Chrome or Firefox) to handle frontend tasks.
#### With Node.js :
- Allows JS to run outside the browser, on the server.
- It provides tools to interact with the system, like :
- File System(read/write files).
- Network(handle HTTP requests).
- Database(connect to databases like MongoDB or MySQL).

### V8 Engine :
Node.js uses Google Chrome's V8 engine to compile JS into machine code, making it lightening-fast.
### Built in APIs :
Node.js comes with built-in APIs (like fs for file systems or HTTP for servers) so you can build powerfull applications without extra libraries.


## Why we need Node.js ?
### Single Language for Full Stack Dev:
- Developers can use JS for both frontend and backend, reducing complexity.
- MERN stack projects(MongoDB, Express, React, Node).
### High performance:
- Thanks to V8 engine, Node.js is super fast.
- It can handle thousands of simultaneous connections with ease.
### Event-Driven and Non-Blocking I/O:
- Unlike traditional servers that block a thread for each request, Node.js uses an asynchronous model, making it highly efficient for handling multiple tasks.
### Scalable for Modern App:
Ideal for real-time app lke chat apps, streaming platforms, or online games.

## Features of **npm** packages
- Express.js : A popular framework for building web applications and APIs.
- Mongoose : A package for interacting with MonogoDB databases using an object data modeling(ODM) approach.
- Axios : A promise-based HTTP client for making API requests.
- React(and React-DOM) : React can be installed via npm for building modern web applications.
- Socket.io : Enables real-time communication between clients and servers.
- Passport.js : Auth middleware for Node.js

### Merger of Node.js and io.js :
io.js was a fork of Node.js created developers who wanted faster updates and improvements. The merger brought io.js's community-driven innovations back into the main Node.js project.

### REPL :
Read-Eval-Print-Loop or Read, Evaluate, Print and Loop. It's an interactive programming env that allows you to execute JS code one statement at a time. 
### command node in terminal opens up an env. 
- We can use it to test simple JS code similar to browser devtools.

### Read :
The REPL reads the user's input (a single line or multiple lines of code) and parses it into a data structure that the JS engine can understand.
### Eval:
The parsed input is evaluated (executed) by the JS engine. If the input is a valid expression, the REPL computes the result.
### Print :
The result of the evaluated expression is printed back to the conosle so the user can see the output.
### Loop :
The process then loops back, waitin for the next input, and continues...

## Node.js Context- global
- In Node.js there's no window or document. Why ? Because Node.js runs outside the browser- it dosen't deal with the DOM or browser-specific APIs.
- Instead, Node.js has a global object. It's the equivalent of window in the browser but designed for server-side env.

## GlobalThis - works in browser too
globalThis is a new feature introduced in ECMAScript 2020(ES11) that provides a standard way to access the global object in any JS env.

### Why :
Consistent Access - In the past, accessing the gloabl object varies depending on the env.
- Browser : window.
- Node.js : global
- Web Workers : self
- Other Environments : Might have their own global objects.

#### globalThis.console.log(module);
#### console.log(globalThis.process);
#### console.log(window.document); 
#### console.log(document);

## Modules
## Self-contained code unit :
- Each file in Node.js is treated as seperate module.
- Variables, functions, or objects defined in one file are not accessible in another file by default unless you explicitly export them.
## Encapsulation :
- Node.js uses the CommonJS moduled system(module.exports and require) to ensure the code in one file does not pollute or interfere with the global scope.
- This makes the code modular, maintainable, and eaiser to debug.

### What exactly is Module in node.js :
- A module in Node.js represents a file containing code that is self-container, reusable and encapsulated.
- Node.js uses the CommonJs module system.
- This module system came from ES module was introduced in JS that's whay its syntax is different.
- Modules in Node.js are created by defining seperate files for different functionalities.
- You must export anything you want to make accessible to other module.

#### Export - **module.exports = add;**
#### import - **const add = require("./math")**

- module.exports is a single object or value.
When you reassign module.exports (e.g., module.exports = add), it completely replaces whatever was previously assigned.
If it is reassigned it again (module.exports = mult), the previous value(add) is replaced with mult.
- ### Inidividual exports are as 
#### **module.exports.add = add; module.exports.mult = mult;** - import it as : **const {add, mult} = require("./math")**
#### module.exports = { add, mult };

## Path Module
In Node.js the path module provides utilities for working with file and directory paths. It's a built in module, so you don't need to install any external packages to use it.

### Special node.js Constants
- __filename - Provides the absolute path of the currently executing file.
- __dirname - Provides the absolute directory path of the currently executoing file. 

- path.parse() : Returns an object with details about a given path, including root, dir, base, ext, and name.
- path.join() : Joins multiple path segments into one, using the appropriate seperator(\ on windows, /on Linux/macOS).
- path.resolve() : Resolves a sequence of paths into an absolute path, starting from the current directory.
- path.extname() : Extracts the file extension from a given path.
- path.basename() : Returns the last part of a path(e.g., file name with extension).
- path.dirname() : Returns the directory part of a path.
- path.sep : Returns the platform-specific path segment seperator (\ for windows, /for Linux/macOS).

#### // in files path means - console.log({has an object})... and it returns Json lookalike, Since Json considers single / as escape char we get //.

## OS modules
1. os.platform() : Returns the OS platform (e.g., 'win32 for Windows, 'linux' for Linux, 'darwin' for macOS).
- Usage : useful for writin cross-platform applications.

2. os.arch() : Returns the CPU architecture(e.g., 'x64', 'arm').
- Usage : Helps optimize xode for specific arch.

3. os.freemem() : Returns the amount of free system memory in bytes.
- Usage : Useful for monitoring system performance.

4. os.totalmem() : Returns the total system memory in bytes.
- Usage : Provides insights into machines capacity.

5. os.uptime() : Returns the system uptime in seconds.
- Usage : Commonly used in logging or monitoring tools || useful for sorting temp data.

6. os.homedir() : Returns the home directory of the current user.
- Usage : Useful for locating user-specific files.

7. os.hostname() : Returns the hostname of the system.
- Usage : Useful for logging or identifying machines in networks.

8. os.networkInterfaces() : Returns an object with details about the network interfaces.
- Usage : Helps in network diagnostics or configurations.

9. os.cpus() : Returns details about each logical CPU/core.
- Usage : Helps optimize code for multi-core processing.

10. os.tmpdir() : Returns the default directory for temporary files.

## File Systems (FS Module) :
- The **fs(File System)** module in Node.js is a core module that allows us to work with the file system, enabling to **read, write, update, delete and watch files**.

Let's see how to URUD operation in a Synchronous way. follow - "./syncfs.jsx'

## fs/promises Module
The fs/promise module provides a promise-based APi for interacting with filesystem, allowing asynchronous operations to be handled using modern JS features like async/await or .then() chains. It is part of the ts module in Node.js but designed for those who prefer promises over callback-based or synchronous methods.

### Advantages
- No need for manual callbacks.
- Cleaner and more intuitive asynchronous workflows using/await.
- Suitable for modern JS applications.

### Use Cases 
- Reading Files asynchronously in a non-blocking way.
- Writing or Appending Data to files without blocking the event loop.
- Performing Multiple File Operations sequentially or concurrently with promise chaining.
- Handling Errors GraceFully with .catch() or try... catch blocks.

---
# Package.json
- package.json is a configuration file used in Node.js projects.
- It contains metadata about the project and information on project dependencies.
- Go to your project folder and use npm init to initialise the project or to create package.json.
#### Name, Version, Description ("name", "version","description").
- Specifies the name and version of the project.
- Helps uniquely identify and version the project.

#### Entry Point ("main"):
- Specifies the main entry point file for the application.
- The file executed when the application starts.

#### Scrips :
- Contains custom scrips for various tasks (e.g., running tests, starting the server).
- Provides shortcuts for common development tasks.

#### Author, License and More :
- Information about the project's author, license, repository, and other metadata.
- Useful for documentation and collaboration.
- You can also use **npm init -y** to create package.json quickly.

## ES Modules
- ES Modules (ECMAScript Modules) allow to use import and export syntax.
They have been available in Node.js since version 12.
- To enable ES Modules, we can either :
Name the file with the .mjs extension, or
Set "type": "module" in the package.json.(Recommended).
- Use import and export instead of require and module.exports.
- After Node.js v14.8, we can use top-level await when ES Modules are a more
modern approach. Even if a package uses C
can import it into ES Modules. However, importing ES Modules CommonJS may cause issues, as some packages have switched to ES Modules.


---
## NPM
- npm is a popular package manager which comes bundled with Node.js.
- It is a CLI tool used to install, update, and remove external packages.
- Do not confuse npm CLI with npmjs.com, as it's a registry where most of the packages of Node.js are saved.
- There are alternative Node.js package managers registry like JSR.

### npm commands
#### npm install package-name [ Alternatively we can use npm i ]
- After installation, we notice a node_modules folder and package-lock.json.
node_modules is what stores all the installed packages. It's usually heavy, so make sure to include it in .gitignore so that it wont get pushed on version control and avoid it while sharing with others.
- You will notice that there are some packages whick we don't install. It's because the package that is installed depend on those third-party packages.
- Now, we can use the package by importing normally as we do with core modules.
- While importing first Node.js checks for cure modules, then files or folders, and at last looks inside node_modules.