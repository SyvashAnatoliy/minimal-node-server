const http = require('http');
const fs = require('fs');

// http://localhost:5500/index.html;
http.createServer(handleRequest).listen(5500);

function handleRequest(request, response) {
  try {
    if (request.url.endswith('.css')){
      response.setHeader('Content-Type', 'text/css'); 
    }
    response.end(fs.readFileSync(__dirname + request.url));
  } catch {
    response.writeHead(404).end('not found');
  }
}
