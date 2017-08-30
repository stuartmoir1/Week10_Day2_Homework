var Park = function(){
  this.enclosure = []; 
};

Park.prototype.enclosureDinosaurCount = function(){
  return this.enclosure.length;
};

Park.prototype.enclosureDinosaurAdd = function(dinosaur){
  this.enclosure.push(dinosaur);
};

Park.prototype.enclosureDinosaurRemove = function(type){
  var array = [];
  for (var dinosaur of this.enclosure){
    if (dinosaur.type !== type) {
      array.push(dinosaur);
    }
  }
  this.enclosure = array;
};

Park.prototype.enclosureDinosaurMoreThan2Offspring = function(){
  var count = 0;
  for (var dinosaur of this.enclosure){
    if (dinosaur.numOfOffspringPerYear > 2){
      count++;
    }
  }
  return count;
};

Park.prototype.enclosureNumberOfDinosaurs1DinosaurStart = function(dinosaur, years){
  return Math.pow((dinosaur.numOfOffspringPerYear + 1), years);
};

Park.prototype.enclosureNumberOfDinosaurs2DinosaursStart = function(dinosaur1, dinosaur2, years){
  numberDinosaurs1 = Math.pow((dinosaur1.numOfOffspringPerYear + 1), years);
  numberDinosaurs2 = Math.pow((dinosaur2.numOfOffspringPerYear + 1), years);
  return numberDinosaurs1 + numberDinosaurs2;
}

module.exports = Park;