var Hapi = require('hapi'),
// We need to construct our Hapi server object
    server = new Hapi.Server();
// We need to tell our server that connections will happen on port 1337
server.connection({ port: 1337 });
// We need to construct a server route with a method GET on
// ANY path that will send a response of 'Hello, World!'
server.route({
  method: 'GET',
  path: '/',
  handler: function(request, reply){
    reply('Hola, Mundo!');
  }
});
// Then, we tell the server to start and log when it has started to the console.
server.start(function(){
  console.log('Magic happening at ' + server.info.uri);
});