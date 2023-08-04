// ----------------------------------------------

// const FCC = "freeCodeCamp"; // Change this line
// let fact = "is cool!"; // Change this line
// fact = "is awesome!";
//console.log(FCC, fact); // Change this line

// ----------------------------------------------

// ----------------------------------------------

// let a = 3;
// let b = 17;
// let c = 12;

// // Only change code below this line
// a += 12;
// b += 9;
// c += 7;
// console.log(a,b,c)

// ----------------------------------------------

// const a = 11;
// const b = 9;
// const c = 3;

// a -= 6;
// b -= 15;
// c -= 1;
// console.log(a,b,c)

// ---------------------------------------------

// function myFun() {
//     console.log("Hello");
//     return "World";
//     console.log("byebye");
//   }
//   myFun();

// ---------------

// const myObject = {
//   "name": 'micky',
//   "tail": 4,
//   "friends": 'pupy'
// }

// console.log(myObject);

// ----------------------------------

// const dogs = {
//   Fido: "Mutt",
//   Hunter: "Doberman",
//   Snoopie: "Beagle"
// };

// const myDog = "Hunter";
// const myBreed = dogs[myDog];
// console.log(myBreed);

//------------------------------

// const myDog = {
//   "name": "Happy Coder",
//   "legs": 4,
//   "tails": 1,
//   "friends": ["freeCodeCamp Campers"]
// };

// myDog['bark'] = 'woof';
// // myDog.bark = 'woof';

// console.log(myDog)

// ----------------------------

// const ourDog = {
//   "name": "Camper",
//   "legs": 4,
//   "tails": 1,
//   "friends": ["everything!"],
//   "bark": "bow-wow"
// };

// delete ourDog.bark;

// console.log(ourDog);

//-------------------------------------

// const myArray = [];
// let i = 0;

// while(i<5){
//     myArray.push(i);
//     i++;
// }
// console.log(myArray);

// ---------------------------------

// const arr = [
//     [1, 2], [3, 4], [5, 6]
//   ];

//   for (let i = 0; i < arr.length; i++) {
//       for (let j = 0; j < arr[i].length; j++) {
//           console.log(arr[i][j]);
//     }
//   }

// -----------------------------

// // Setup
// const contacts = [
//     {
//       firstName: "Akira",
//       lastName: "Laine",
//       number: "0543236543",
//       likes: ["Pizza", "Coding", "Brownie Points"],
//     },
//     {
//       firstName: "Harry",
//       lastName: "Potter",
//       number: "0994372684",
//       likes: ["Hogwarts", "Magic", "Hagrid"],
//     },
//     {
//       firstName: "Sherlock",
//       lastName: "Holmes",
//       number: "0487345643",
//       likes: ["Intriguing Cases", "Violin"],
//     },
//     {
//       firstName: "Kristian",
//       lastName: "Vos",
//       number: "unknown",
//       likes: ["JavaScript", "Gaming", "Foxes"],
//     },
//   ];

//   function lookUpProfile(name, prop) {
//     // Only change code below this line

//     for (let i = 0; i < contacts.length; i++) {
//       if (contacts[i].firstName === name) {
//         return contacts[i][prop] || "No such contact"
//       }
//     }

//     // Only change code above this line
//   }

//   let data = lookUpProfile("Akira", "likes");

//   console.log(data);

// ------------------------------------------

//   function randomWholeNum() {
//     return Math.floor(Math.random() * 20);
//   }

//   console.log(randomWholeNum());

// ------------------------------------

// let y = Math.floor(-1.3);
// let x  = Math.round(-1.3);
// console.log(x,y);

// -----------------------------

// const a = parseInt('11',25);
// console.log(a);

// ---------------------------

// function countup(n) {
//     if (n < 1) {
//       return [];
//     } else {
//       const countArray = countup(n - 1);
//       countArray.push(n);
//       return countArray;
//     }
//   }
//   console.log(countup(10));

// ----------------------

// function countdown (n) {
//   return n < 1 ? [] : [n].concat(countdown(n-1));
// }
// console.log(countdown(4))

// --------------------------

// let obj = {
//   name:"FreeCodeCamp",
//   review:"Awesome"
// };
// Object.freeze(obj); // Object.freeze() bir object in degistirilmez hale getirir. Mevcut ogeleri degistirmek ve de yeni oge eklenmesini engeller
// obj.review = "bad";
// obj.newProp = "Test";
// console.log(obj);

// -----------------------------

// const greeting = (name = "Anonymous") => "Hello " + name;

// // gonderilen deger default degeri ezer isimli ornegi icra ettik
// console.log(greeting("John"));
// console.log(greeting());

// --------------------------------

// ------------ Rest Parameter -----------------

// function howMany(...args) {
//   return "You have passed " + args.length + " arguments.";
// }
// console.log(howMany(0, 1, 2));
// console.log(howMany("string", null, [1, 2, 3], { }));

// ----------------------------------------

// const sayilar = [1,2,3,4,5];

// for(sayi of sayilar) {
//   console.log(sayi);
// }

// ------------------------------------

// -------- spread oparator ---------

// const arr1 = [1,2,3,4];
// const arr2 = [5,6,7,8];

// const united = [...arr1,...arr2];
// console.log(united);

// --------------------------------

// const arr = [2,34,56,7];
// const maximum = Math.max(...arr);
// const minimum = Math.min(...arr);

// console.log(maximum,minimum);

// ----------- ES6 script-type -------------------

// const user = {name: 'faso', age: 34, city: 'Austin'}
// const {name,age} = user;

// console.log(user.name);
// console.log(age,name);

// ---------------------------------

// ----------- ES6 -------------------

// const user = { name: 'Fasik Faso', age : 34 };
// const {name: userName, age: userAge} = user;

// console.log(userName,userAge);

// ----------------------------------

// const [a, b,,,, c] = [1, 2, 3, 4, 5, 6];
// console.log(a, b, c);

// -----------------------

// const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
// console.log(a, b);
// console.log(arr);

// --------------------

// -------- Template Literal ---------------

// const person = {
//   name: "Zodiac Hasbro",
//   age: 56
// };

// const greeting = `Hello, my name is ${person.name}!
// I am ${person.age} years old.`;

// console.log(greeting);

// ----------------------------

// const person = {
//   name: "Taylor",
//   barzo() {
//     return "this is ES6 function in an object";
//   },
// };
// console.log(person.barzo())

// ------------------------

// class Book {
//     constructor(author) {
//       this._author = author;
//     }
//     // getter
//     get writer() {
//       return this._author;
//     }
//     // setter
//     set writer(updatedAuthor) {
//       this._author = updatedAuthor;
//     }
//   }
//   const novel = new Book('anonymous');
//   console.log(novel.writer);
//   novel.writer = 'newAuthor';
//   console.log(novel.writer);

// ---------------------------

// ---------- Regular Expressions - regex --------------

// let testStr = 'freeCodeCamp';
// let testRegex = /Code/
// testRegex.test(testStr)
//console.log(testRegex.test(testStr));

// -----------------------------------

"Hello, World!".match(/Hello/);
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
console.log(ourStr.match(ourRegex));