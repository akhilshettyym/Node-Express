# Express
#### Express.js is a minimal and flexible web application framework for Node.js based on http module.
#### It simplifies routing, middleware, and handling HTTP requests in Node.js applications.

- It is an extremely popular with wide community support.
- Alternatives: Fastify, Nest.js, Koa, Hono, Elysia.js
- Use **npm install express** command to install Express.js
- We are going to use Express.js v5 in this project which is already stable.
- For some reasons, directly installing express installs v4, which is why, we can use **npm install express@5** to install latest version.

#### import express from 'express';
const app = express(); - express instance as it is the central obj that encapsulates all the functionality of web app.
provides clean, modular structure and adds a higher level of abstraction than raw Node.js.

#### NOTE - Adding **"type": "module"** will allow us to use import export functionalities  in a file.