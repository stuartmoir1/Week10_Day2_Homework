var assert = require("assert");
var Dinosaur = require("../dinosaur.js");

describe("Dinosaur", function(){

  var dinosaur;

  beforeEach(function(){
    dinosaur = new Dinosaur("Stegosaurus", 10); 
  });

  it("Test dinosaur type", function(){
    assert.strictEqual(dinosaur.type, "Stegosaurus");
  });

  it("Test dinosaur number of offspring per year", function(){
    assert.strictEqual(dinosaur.numOfOffspringPerYear, 10);
  });

});