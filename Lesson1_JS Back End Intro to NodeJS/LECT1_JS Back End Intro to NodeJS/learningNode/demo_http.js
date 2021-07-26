const http = require('http');

// create server object:
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Hello World!'); // write a response to the client
    res.end(); // end the response
}).listen(8080);