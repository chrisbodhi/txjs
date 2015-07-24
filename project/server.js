// Requires go here!
var Hapi  = require('hapi'),
    Users = require('./user-data'),
    Loki  = require('lokijs'),
    Joi   = require('joi');

var db     = new Loki('./data/users.json'),
    users  = new Users(db);
    
// Construct the Hapi server here
var server = new Hapi.Server();
server.connection({ port: 1337 });

// Our routes go here:
server.route({
  method: 'POST',
  path: '/user',
  handler: addUser,
  config: {
    validate: {
      payload: { // You know, like from request.payload in addUser
        name: Joi.string(),
        favoriteNumber: Joi.number(),
        starred: Joi.string().optional()
      }
    }
  }
});

server.route({
  method: 'GET',
  path: '/users',
  handler: getAllUsers
});

server.route({
  method: 'GET',
  path: '/user',
  handler: searchUsers,
  config: {
    validate: {
      query: {
        name: Joi.string()
      }
    }
  }
});

server.route({
  method: 'GET',
  path: '/{param*}', // Saving everything after the slash to the param variable
  handler: {
    directory: { path: 'public' } // Follow the file path from public, on down
  }
});

// Start the server
server.start(function(){
  console.log('Server started: ' + server.info.uri);
});

function addUser(request, reply){
  var starred = !!request.payload.starred; // Implicit conversion to a boolean: true or false
  users.addUser(request.payload.name, 
                request.payload.favoriteNumber, 
                starred
               ); 
  reply().redirect('/');
}

function getAllUsers(request, reply){
  reply(JSON.stringify(users.getUsers()))  // Makes for a better stack trace if JSON is broken
    .type('application/json');             // Using JSON rather than plain-text to be good API maintainers
}

function searchUsers(request, reply){
  var searchResult = users.getUser(request.query.name);
  
  if(searchResult.length === 0){
    reply('No users found.')
      .code(404);
  } else {
    reply(JSON.stringify(searchResult))
      .type('application/json');
  }
}