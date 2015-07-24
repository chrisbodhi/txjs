// Require Loki
var Loki = require('lokijs'); // capitalize because we're constructing objects
// Construct our DB
var db = new Loki('./data/database.json');
// Load our DB
    // Create our collection
db.loadDatabase({}, function(){ // empty object as 1st param for using defaults options
  var myFavs = db.addCollection('favs'); // like createTable
  // Add a document!
  myFavs.insert([{
    name: 'occupation',
    value: 'open web education'
  },{
    name: 'hobby',
    value: 'robotics'
  }]);
    // Don't forget to save!
  db.saveDatabase();
});

// run this file in the command line: node add-docs.js
// if run a second time, will not double, but will replace existing collection

