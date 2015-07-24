// Require Loki
var Loki = require('lokijs');
// Construct our DB
var db = new Loki('./data/database.json');
// Load our DB
db.loadDatabase({}, function(){
    // Retrieve our collection
  var myFavs = db.getCollection('favs');
    // Find a document!
  var myFavHobby = myFavs.find({
    name: 'hobby' // case-sensitive
  }); // note: returns an array
  
  // Update and save the record
  myFavHobby[0].subclass = 'nodebots';
  myFavs.update(myFavHobby);
//   myFavs.update(myFavHobby[0]); // to update only the one we changed
  db.saveDatabase();
  
    // Log it out!
  console.log(myFavHobby);
});


