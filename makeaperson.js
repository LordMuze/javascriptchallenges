var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
  this.getFullName = function() {
    return firstAndLast;
  }
  this.getFirstName = function(){
    return firstAndLast.match(/(^[A-Z]\w+)/)[0];
  }
  this.getLastName = function(){
    return firstAndLast.match(/([A-Z][a-z]+)$/)[0];
  }
  this.setFirstName = function(first){
    firstAndLast = firstAndLast.replace(/(^[A-Z]\w+)/, first);
  }
  this.setLastName = function(last){
    firstAndLast = firstAndLast.replace(/([A-Z][a-z]+)$/, last);
  }
  this.setFullName = function(firstAndLast){
    return this.firstAndLast = firstAndLast;
  }
  return firstAndLast;
};

var bob = new Person("Bob Ross");

