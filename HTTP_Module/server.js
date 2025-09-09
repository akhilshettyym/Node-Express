const http = require("http");

// Web Server
const server = http.createServer((req, res) => {
    if (req.url = "/") {
        res.setHeader("Content-Type", "text/html");
        res.write("<h1> The HTTP module in Node.js allowsdevelopers to create an HTTP server and handle client requests and server responses. It provides methods and properties to work with HTTP requests and responses, enabling the creation of REST API's, web pages, and other newtworked applications. </h1>");
        res.end();
    }

    if (req.url = "/source") {
        res.setHeader("Content-Type", "text/plain");
        res.write("A web server is a software or hardware that serves web content (HTML, CSS< JavaScript, etc.) to clients (usually browsers) over the internet or an intranet. It uses protocols like HTPPS/HTTPS to handle requests and responses.");
        res.end();
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
})