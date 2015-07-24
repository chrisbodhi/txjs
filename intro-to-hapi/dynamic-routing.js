// todo: Get the string out of the slug
var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection({ port: 1337 });

server.route({
  method: 'GET',
  path: '/{name?}', // set the optional param to 'name' variable 
  // We want to establish a path with an optional parameter name
  handler: function(request, reply) {
    // We need to do something here with the request's parameters
    if (!request.params.name){
      reply('Hola, Mundo!');
    } else {
      reply('Hola, ' + encodeURIComponent(request.params.name) + '!'); // escape the string
    }    
  },
});

server.start(function() {
  console.log('Server running at:', server.info.uri);
});