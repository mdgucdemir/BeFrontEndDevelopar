"use strict";
// // -- Creating a First Class --
let user1;
user1 = {
    name: 'Deniz',
    age: 33,
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    }
};
user1.greet('Hi I`m');
