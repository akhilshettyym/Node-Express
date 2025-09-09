# HTTP Module

The http module in Node.js allowsdevelopers to create an HTTP server and handle client requests and server responses. It provides methods and properties to work with HTTP requests and responses, enabling the creation of REST API's, web pages, and other newtworked applications.

A web server is a software or hardware that serves web content (HTML, CSS< JavaScript, etc.) to clients (usually browsers) over the internet or an intranet. It uses protocols like HTPPS/HTTPS to handle requests and responses.

#### Steps :
- Step1 : 
The https module is built into Node.js. Use require('http') to import it into your script.

- Step2 : 
The createServer method initializes an HTTP server.
It takes a callback function as an arguement with two parameters :
req : the incoming request object.
res : the outgoing response object.

- Step3 :
The req.url property provides the path requested by the client.
Based on req.url, send different responses using res.end().

- Step4 :
Use the listen() method to specify the port the server will run on.
Optionally, pass a callback to run code when the server starts (e.g., console.log()).