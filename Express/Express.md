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

### Environment Variables:
- Environment variables are used to store configuration values like port number, API keys, database URL's or secrets outside the codebase.
- Most platforms automatically add PORT environment variable which we can use.
- You can access environment variables using process.env. Process is a global object available in Node.js
- To access environment variable, you first have to set in your OS.
<ol>
<li>For macOS, and Linux, we can use export VARIABLE_NAME="value" in terminal.</li>
<li>On Powershell, we can use $env:VARIABLE_NAME="value"</li>
<li>If you want to set permanently on Linus, and macOS, we have to include that command in your shell config 
~/.bashrc, ~/.zshrc, etc.</li>
<li>If you want to set permanently on Windows, we can search "Environment Variables" in windows search</li>
</ol>

- Setting env var using command is tedious in dev, especially if we have multiple projects.
- So, we typically use .env file to manage out environment variables.
- This isn't a file which we share with others as it includes sensitive info, so make sure to include it in .gitignore. To let developers know which variables are needed, we can include .env.example file with empty values.
- .env file typically has en var in syntax: VARIABLE=value seperated by new line.
- After Node.js v20.6.0, we can directly include .env file using --env-file syntax.
- For older versions, we have to install a seperate package named dotenv and import it in our project.
<ol>
<li>import 'dotenv/config'</li>
<li>require('dotenv').config()</li>
</ol>
- Since Node.js has this feature, we will use build-in feature for that.

##### If PORT is set using $env:VAR_NAME:"value" or set is used then probably we will see the PORT number as that even if we change it later. So **Remove-Item env:\PORT** This removes the set PORT number. We can check what port it is on using **echo $env:PORT**

### Validating Environment Variables 
- We might have env vars in our project, and it's important to validate each one to ensure they are all present and correct.
- We can either handle this manually or, preferably, use a validation library like **ZOD**.
- ZOD is a TypeScript-first schema declaration and validation library that allows to define and validate the structure of our data eaisly.
- We will be using ZOD for various validations in the future, so we'll also use it here to validate env vars.

