var assert = require('chai').assert,
    Users  = require('../user-data'),
    Loki   = require('lokijs'), // common use of Loki - for mock in testing of noSQL db
    users; // for the db

// Make our db
var db = new Loki('./tests/data/user-test-data.json'); // For gulp and its cwd default

// Construct instance of user data module
var userData = new Users(db);

describe('User Data Module tests', function(){
  before(function(done){ // Use of 'done' is because we have async functions [db work] going on
    setTimeout(function(){
      users = db.getCollection('users');
      done();
    }, 500);
  });
  
  beforeEach(function(){
    if (users) { users.removeDataOnly(); } // Remove data from collection rather than destroy it
  });
  
  it('should save a new user with addUser', function() {
    userData.addUser('Sammy', 55, false);
    var sammy = users.find({ name: 'Sammy' });
    
    assert.equal(sammy.length, 1);
    assert.equal(sammy[0].name, 'Sammy');
    assert.equal(sammy[0].favoriteNumber, 55);
    assert.notOk(sammy[0].starred);
  });
  
  it('should get a user by name using getUser', function() {
    users.insert({
      name: 'test',
      favoriteNumber: 122,
      starred: true
    });
    
    db.saveDatabase();
    
    var actual = userData.getUser('test');
    
    assert.equal(actual.length, 1)
    
    actual = actual[0]; // So we can work with the object that's returned
    
    assert.equal(actual.name, 'test');
    assert.equal(actual.favoriteNumber, 122);
    assert.equal(actual.starred, true);
  });

  it('should return all users using getUsers', function() {
    users.insert([{
      name: 'test1',
      favoriteNumber: 111,
      starred: true
    },{
      name: 'test2',
      favoriteNumber: 222,
      starred: false
    }]);
    
    db.saveDatabase();
    
    var allUsers = userData.getUsers();
    
    assert.equal(allUsers.length, 2);
    assert.equal(allUsers[0].name, 'test1');
    assert.equal(allUsers[1].starred, false);
    assert.equal(allUsers[1].favoriteNumber, 222);
  });
});




