import { createServer } from 'http';
import crypto from 'crypto';
import { readFile, writeFile } from 'fs/promises';
import path from 'path';

const PORT = 2003;
const DATA_FILE = path.join("data", "links.json");

const serveFile = async (res, filePath, contentType) => {
    try {
        const data = await readFile(filePath);
        console.log(`Serving file: ${filePath}`);
        res.writeHead(200, { "content-type": contentType });
        res.end(data);
    } catch (error) {
        console.error(`File not found: ${filePath}`);
        res.writeHead(404, { "content-type": "text/plain" });
        res.end("404 page not found...");
    }
};

const loadLinks = async () => {
    try {
        const data = await readFile(DATA_FILE, "utf-8");
        console.log("Loaded links.json");
        return JSON.parse(data);
    } catch (error) {
        if (error.code === "ENOENT") {
            console.log("links.json not found, creating a new one...");
            await writeFile(DATA_FILE, JSON.stringify({}));
            return {};
        }
        throw error;
    }
};

const saveLinks = async (links) => {
    console.log("Saving links.json");
    await writeFile(DATA_FILE, JSON.stringify(links, null, 2));
};

const server = createServer(async (req, res) => {
    console.log(`${req.method} ${req.url}`);

    if (req.method === "GET") {
        if (req.url === "/") {
            return serveFile(res, path.join("public", "index.html"), "text/html");
        } else if (req.url === "/styles.css") {
            return serveFile(res, path.join("public", "styles.css"), "text/css");
        } else if(req.url === "/links") {
            const links = await loadLinks();
            res.writeHead(200, { "Content-Type" : "application/json" });
            return res.end(JSON.stringify(links));
        } else {
            const links = await loadLinks();
            const shortCode = res.url.slice(1);
            if(links[shortCode]) {
                res.writeHead(302, { location: links[shortCode]});
                return res.end();
            }
            res.writeHead(404, { "Content-Type": "text/plain"});
            return res.end("Shortened URL is not found");
        }
    }

        const links = await loadLinks();
        const code = req.url.slice(1);
        if (links[code]) {
            console.log(`Redirecting short code "${code}" -> ${links[code]}`);
            res.writeHead(302, { Location: links[code] });
            return res.end();
        } else if (code) {
            console.warn(`Short code not found: ${code}`);
        }

    if (req.method === "POST" && req.url === "/shorten") {
        const links = await loadLinks();
        let body = "";
        req.on("data", (chunk) => (body += chunk));

        req.on("end", async () => {
            try {
                console.log(`Received body: ${body}`);
                const { url, shortCode } = JSON.parse(body);

                if (!url) {
                    console.warn("No URL provided in request");
                    res.writeHead(400, { "content-type": "text/plain" });
                    return res.end("URL is required");
                }

                const finalShortCode = shortCode || crypto.randomBytes(4).toString("hex");
                if (links[finalShortCode]) {
                    console.warn(`Short code already exists: ${finalShortCode}`);
                    res.writeHead(400, { "content-type": "text/plain" });
                    return res.end("Short code already exists !! Please enter a new one.");
                }

                links[finalShortCode] = url;
                await saveLinks(links);

                console.log(`Shortened URL: ${url} -> ${finalShortCode}`);

                res.writeHead(200, { "content-type": "application/json" });
                res.end(JSON.stringify({ success: true, shortCode: finalShortCode }));
            } catch (err) {
                console.error("Invalid request body:", err.message);
                res.writeHead(400, { "content-type": "text/plain" });
                res.end("Invalid request body");
            }
        });
    }
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});