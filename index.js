const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<html><body><h1>Hello World!</h1></body></html>");
});

let port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);