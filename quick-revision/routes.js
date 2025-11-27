// Simple routes using http method

import http from "http";


const server = http.createServer((req, res) => {
    const url = req.url;
    if (url == "/") {
        res.writeHead(200, { "Content-Type": "text/plain" })
        res.end("Home page");
    }
})

const port = 8080;

server.listen(port, () => {
    console.log(`Now the server is running on port ${port}`);
    
})