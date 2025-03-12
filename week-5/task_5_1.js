const http = require('http');
const url = require('url');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const method = req.method;

  // Check the Accept header to determine response type
  const acceptHeader = req.headers.accept;

  // Set default response type to HTML if no specific type is requested
  let contentType = 'text/html';

  if (acceptHeader && acceptHeader.includes('application/json')) {
    contentType = 'application/json';
  } else if (acceptHeader && acceptHeader.includes('text/plain')) {
    contentType = 'text/plain';
  }

  res.statusCode = 200;

  // Handle different types of resources based on the request URL or accept header
  if (path === '/') {
    // Serve HTML
    if (contentType === 'text/html') {
      res.setHeader('Content-Type', 'text/html');
      res.end('<html><body><h1>Hello, HTML Response!</h1></body></html>');
    } 
    // Serve JSON
    else if (contentType === 'application/json') {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ message: 'Hello, JSON Response!' }));
    } 
    // Serve Plain Text
    else if (contentType === 'text/plain') {
      res.setHeader('Content-Type', 'text/plain');
      res.end('Hello, Plain Text Response!');
    }
  } else {
    // Handle unknown paths
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Resource not found');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
