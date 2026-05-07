const http = require('http');

// server is a event emitter, it can emit events and we can listen to those events
// web server is a server that listens to incoming requests and sends responses back to the client
const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>Welcome to the Home Page</h1>');
        res.end();
    }
    if(req.url === '/source') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>Welcome to the Source Page</h1>');
        res.end();
    }
}) 

const PORT = 8000;
server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})