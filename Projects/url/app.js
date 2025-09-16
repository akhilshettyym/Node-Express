import { createServer } from 'http';
import { readFile } from 'fs/promises';
import path from 'path';

const PORT = 2003;

const serveFile = async (res, filePath, contentType) => {
    try {
        const data = await readFile(filePath);
        res.writeHead(200, { "content-type": contentType });
        res.end(data);
    } catch (error) {
        res.writeHead(404, { 'content-type': test/plain });
        res.end("404 page not found...");
    }
}
const server = createServer(async (req, res) => {
    if (req.method == "GET") {
        if (req.url === "/") {
            return serveFile(res, path.join("public", "index.html"), "text/html");
        } else if (req.url === "/styles.css") {
                return serveFile(res, path.join("public", "styles.css"), "text/css");
            }
    }
})

server.listen(PORT, () => {
    console.log(`Listening on PORT https://localhost:${PORT}`);
})