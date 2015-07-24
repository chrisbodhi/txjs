// First, we need the http module
var http = require('http');
// Then, we need to create our server
http.createServer(function(request, response){
// This server needs to respond to all requests with a 200 status
  // a Content-Type of text/plain
  response.writeHead(200, {
    'Content-Type': 'text/plain'
  })
  // and the content 'Hello, World!'
  response.end('Hola, Mundo!');
}).listen(1337);
// Finally, let's tell the server to listen to localhost at port 1337