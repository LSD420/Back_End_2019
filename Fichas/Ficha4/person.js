function Person(firstName,lastName,age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}
Person.prototype.greet = function() {
    console.log("Hello "+ this.firstName + " " + this.lastName + ", " + this.age);
}
var john = new Person("John", "Doe", "19");
john.greet();
var jane = new Person("Jane","Dow","18");
jane.greet();
console.log(john.__proto__);
console.log(jane.__proto__);
console.log(john.__proto__ == jane.__proto__);