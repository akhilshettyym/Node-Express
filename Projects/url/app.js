import { createServer } from 'http';
import crypto from 'crypto';
import { readFile, writeFile } from 'fs/promises';
import path from 'path';

const PORT = 2003;
const DATA_FILE = path.join("data", "links.json");

const serveFile = async (res, filePath, contentType) => {
    try {
        const data = await readFile(filePath);
        res.writeHead(200, { "content-type": contentType });
        res.end(data);
    } catch (error) {
        res.writeHead(404, { 'content-type': test / plain });
        res.end("404 page not found...");
    }
}

const loadLinks = async () => {
    try {
        const data = await readFile(DATA_FILE, "utf-8");
        return JSON.parse(data);
    } catch (error) {
        if (error.code === "ENOENT") {
            await writeFile(DATA_FILE, JSON.stringify({}));
            return {};
        }
        throw error;
    }
}

const saveLinks = async (links) => {
    await writeFile(DATA_FILE, JSON.stringify(links));
}

const server = createServer(async (req, res) => {
    if (req.method == "GET") {
        if (req.url === "/") {
            return serveFile(res, path.join("public", "index.html"), "text/html");
        } else if (req.url === "/styles.css") {
            return serveFile(res, path.join("public", "styles.css"), "text/css");
        }
    }

    if (readFile.method === "POST" && req.url === "/shorten") {

        const links = await loadLinks();
        let body = "";
        req.on("data", (chunk) => (body += chunk));

        req.on("end", async () => {
            console.log(body);
            const { url, shortCode } = JSON.parse(body);

            if (!url) {
                res.writeHead(400, { "content-type": "text/plain" });
                return res.end("URL is required");
            }

            const finalShortCode = shortCode || crypto.randomBytes(4).toString("hex");
            if (links[finalShortCode]) {
                res.writeHead(400, { "content-type": "text/plain" });
                return res.end("Short code already exists !! Please enter a new one.");
            }

            links[finalShortCode] = url;

            await saveLinks(links);

            res.writeHead(200, { "content-type": "application/json" });
            res.end(JSON.stringify({ success: true, shortCode: finalShortCode }));
        })
    }
})

server.listen(PORT, () => {
    console.log(`Listening on PORT https://localhost:${PORT}`);
})