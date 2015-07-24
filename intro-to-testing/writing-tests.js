// Let's require in chai and assign the variable assert to be chai's assert property
var chai   = require('chai'),
    assert = chai.assert
    expect = chai.expect;

chai.should(); // augments object prototype so we can call 'should' on stuff

// We need to describe our unit test suite...
describe('My Unity Test', function(){
  // Write a test that tests 2 + 2 equals 4
  it('should return true to 2 + 2 === 4', function(){
    assert.equal(2 + 2, 4);
  });
  // Write a test that tests the type of a string is 'string'
  it('should return the type of a string correctly', function(){
//    assert.typeOf('is a string', 'string');
//    assert.isString('is a string');
//    expect('is a string').to.be.a('string');
      'is a string'.should.be.a('string'); 
  });
  // Write a test that returns a custom failure message!
  it('should return an error message', function(){
//     expect(true).to.equal(false, 'my custom err msg');
    assert.equal(true, false, 'true does not equal false -- whaaaa?');
//     expect(true, 'custom err msg').to.be.not.ok
  });
});
