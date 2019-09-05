/*
  9. Create a class in TypeScript with a constructor that accepts a name of a person.
  This class should log “hello” plus the name of the person that you passed into the class.
*/
var Person = /** @class */ (function () {
  function Person(name) {
    this.personName = name;
  }
  Person.prototype.myName = function () {
    return "Hello " + this.personName;
  };
  return Person;
}());
var helloPerson = new Person('Jan Henning');
console.log(helloPerson.myName());
