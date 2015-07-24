var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection({ port: 1337 });

// Static serving means we create a route that captures all segments into
// a param called 'param' from GET requests
// Then, we give it a handler, which requires a directory, including a path
// to that directory.

// a greedy route that take everything -- put at the end as a failsafe
server.route({
  method: 'GET',
  path: '/{param*}', // store all of the params from the slug
  handler: {
    // convention over configuration, atypical for Hapi
    directory: { path: '../project/public' } 
  }
});

server.start(function() {
    console.log('Server running at:', server.info.uri);
});