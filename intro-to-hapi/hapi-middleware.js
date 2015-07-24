var Hapi = require('hapi'),
    server = new Hapi.Server();

server.connection({ port: 1337 });

server.route({
  method: 'GET',
  path: '/',
  handler: function(request, reply) {
    // Our middleware helps us get the query string data
    // and attaches it to request. Now we use it.
    if (!request.query.name) {
      reply('Hello, mundo!');
    } else {
      reply('Hola, ' + request.query.name);
    }
  },
});

server.start(function() {
  console.log('Server running at:', server.info.uri);
});