function userData(db) {
  //load the database
  this.db   = db;
  var users;
  
  db.loadDatabase({}, function(){
    users = db.getCollection('users');
  }); // Possibility of race condition here!
  
  this.addUser = function(name, favNumber, starred) {
    users.insert({
      name: name, // In ES6, just 'name' instead of 'name: name' b/c key and value have same names
      favoriteNumber: parseInt(favNumber, 10),
      starred: starred
    });
    console.log(myString); // outputs 'private info' to the Node.js terminal
    db.saveDatabase();
  }

  this.getUsers = function() {
    return users.find({});
  }

  this.getUser = function(name) {
    var result = users.find({
      name: name // Or {name} for ES6
    });
    
    if (result.length === 0){
      var tempNum = parseInt(name, 10);
      // Checks that entry is a number if the name isn't found
      if (typeof(tempNum) === 'number'){
        result = users.find({
          favoriteNumber: tempNum // Allow us to search by favorite number, too
        });
      }
    }
    
    return result;
  }
}

var myString = 'private info';

//turn this into a module!
module.exports = userData; // turns this function into a Node module!