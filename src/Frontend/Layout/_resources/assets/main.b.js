'use strict';

var Person = /** @class */ (function () {
    // name is a private member variable
    function Person(name) {
        this.name = name;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    return Person;
}());

var person = new Person('John');
console.log(person.getName());
