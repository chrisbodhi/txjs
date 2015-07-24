// Objective: build a server that responds with 'Hello, [name]'
// where [name] is the query paramter called 'name'!
var http = require('http'),
// We need to require in the url module
    url  = require('url');

http.createServer(function(request, response) {

    // Let's use the url .parse on request.url and see what we get
    // (hint, try passing 'true' as the second paramter)
    var urlInfo = url.parse(request.url, true);
    console.dir(urlInfo);

    response.writeHead(200, {
        'Content-Type': 'text/plain'
    })

    // We need to add the value passed to the query parameter called name
    response.end('Hello, ' + urlInfo.query.name +'!');
}).listen(1337);