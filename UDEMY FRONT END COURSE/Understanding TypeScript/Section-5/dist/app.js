"use strict";
// // -- Creating a First Class --
class Person {
    constructor(n, location) {
        this.age = 33;
        this.name = n;
        this.address = location; // // optinal and there is no error 
    }
    greet(phrase) {
        console.log(phrase + ' ' + this.name + ' ' + 'and I am ' + this.age + ' ' + 'years old');
    }
}
let user1;
user1 = new Person('Deniz');
user1.greet('Hi I`m');
console.log(user1);
let add;
add = (n1, n2) => {
    return n1 + n2;
};
