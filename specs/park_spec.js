var assert = require("assert");
var Park = require("../park.js");
var Dinosaur = require("../dinosaur.js");

describe("Park", function(){

  var park;

  beforeEach(function(){
    park = new Park();
    dinosaur1 = new Dinosaur("Stegosaurus", 10);
    dinosaur2 = new Dinosaur("Tricerotops", 1);
    dinosaur3 = new Dinosaur("Tricerotops", 5);
  });

  it("Test park starts empty", function(){
    assert.strictEqual(park.enclosureDinosaurCount(), 0);
  });

  it("Test add dinosaur to enclosure", function(){
    park.enclosureDinosaurAdd(dinosaur1);
    assert.strictEqual(park.enclosureDinosaurCount(), 1);
  });

  it("Test remove dinosaurs of type from enclosure", function(){
    park.enclosureDinosaurAdd(dinosaur1);
    park.enclosureDinosaurAdd(dinosaur2);
    park.enclosureDinosaurAdd(dinosaur3);
    park.enclosureDinosaurRemove("Tricerotops");
    assert.strictEqual(park.enclosureDinosaurCount(), 1);
  });

  it("Test count dinosaurs with >2 offspring", function(){
    park.enclosureDinosaurAdd(dinosaur1);
    park.enclosureDinosaurAdd(dinosaur2);
    park.enclosureDinosaurAdd(dinosaur3);
    assert.strictEqual(park.enclosureDinosaurMoreThan2Offspring(), 2);
  });

  it("Test number of dinosaurs after one year/ 1 dinosaur start", function(){
    park.enclosureDinosaurAdd(dinosaur1);
    assert.strictEqual(park.enclosureNumberOfDinosaurs1DinosaurStart(dinosaur1, 1), 11);
  });

  it("Test number of dinosaurs after two years/ 1 dinosaur start", function(){
    park.enclosureDinosaurAdd(dinosaur1);
    assert.strictEqual(park.enclosureNumberOfDinosaurs1DinosaurStart(dinosaur1, 2), 121);
  });

  it("Test number of dinosaurs after two years/ 2 dinosaur start", function(){
    park.enclosureDinosaurAdd(dinosaur1);
    park.enclosureDinosaurAdd(dinosaur3);
    assert.strictEqual(park.enclosureNumberOfDinosaurs2DinosaursStart(dinosaur1, dinosaur3, 2), 157);
  });

});