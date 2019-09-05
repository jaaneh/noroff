/*
  9. Create a class in TypeScript with a constructor that accepts a name of a person.
  This class should log “hello” plus the name of the person that you passed into the class.
*/
class Person {
  personName: string
  constructor(name: string) {
    this.personName = name;
  }

  name() {
    return "Hello " + this.personName;
  }
}

let hello = new Person('Jan Henning');
console.log(hello.name())