//Chai is a BDD / TDD assertion library for [node]
var chai = require('chai');  
var assert = chai.assert;    // Using Assert style
var result = false;
var a = 2;
var b = 3;
assert.equal(a,b);
result = true;
assert.equal(a,b);
console.log("result: "+result);