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

// "Hello, World!".match(/Hello/);
// let ourStr = "Regular expressions";
// let ourRegex = /expressions/;
// console.log(ourStr.match(ourRegex));

// ----------------------------------------

// const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
// const regex = /[A-Z]/g;
// const found = paragraph.match(regex);

// console.log(found);

// ------------------------------------------

// let twinkleStar = "Twinkle, twinkle, little star";
// let starRegex = /Twinkle/gi; // ( g - global match) and ( i - case-insensitive ) multiple use to regex
// let result = twinkleStar.match(starRegex); 

// console.log(result);


// ---------------------------

// let bigStr = "big";
// let bagStr = "bag";
// let bugStr = "bug";
// let bogStr = "bog";
// let bgRegex = /b[aiu]g/;
// console.log(bigStr.match(bgRegex));
// console.log(bagStr.match(bgRegex));
// console.log(bugStr.match(bgRegex));
// console.log(bogStr.match(bgRegex));

// ----------------------------------

// let catStr = "cat";
// let batStr = "bat";
// let matStr = "mat";
// let bgRegex = /[a-e]at/;
// console.log(catStr.match(bgRegex));
// console.log(batStr.match(bgRegex));
// console.log(matStr.match(bgRegex));

// -----------------------------------

// let jennyStr = "Jenny8675309";
// let myRegex = /[a-z0-9]/ig;
// console.log(jennyStr.match(myRegex));

// ------------------------------------

// let soccerWord = "gooooooooal!";
// let gPhrase = "gut feeling";
// let oPhrase = "over the moon";
// let goRegex = /go*/;
// //console.log(soccerWord.match(goRegex));
// console.log(gPhrase.match(goRegex));
// //console.log(oPhrase.match(goRegex));

// ---------------------------------------

// ------ Match Beginning String Patterns ---------

// let rickyAndCal = "Cal and Ricky both like racing.";
// let calRegex = /^Cal/; // Change this line
// let result = calRegex.test(rickyAndCal);

// console.log(result)

// ---------------------------------------

// --------- Match Ending String Patterns ---

// let caboose = "The last car on a train is the caboose";
// let lastRegex = /caboose$/; // Change this line
// let result = lastRegex.test(caboose);

// console.log(result)

// -----------------------------------------

// ----------- Match All Letters and Numbers --------

// let longHand = /[A-Za-z0-9_]+/;
// let shortHand = /\w+/;
// let numbers = "42";
// let varNames = "important_var";
// console.log(longHand.test(numbers));
// console.log(shortHand.test(numbers));
// console.log(longHand.test(varNames));
// console.log(shortHand.test(varNames));

// ---------------------------------------------

// -------- Match Everything But Letters and Numbers -------

// let quoteSample = "The five boxing wizards jump quickly.";
// let nonAlphabetRegex = /\W/g; // Change this line
// let result = quoteSample.match(nonAlphabetRegex);

// console.log(result);

// -----------------------------------------------------

// ----------- Match All Numbers -------------------

// let movieName = "2001: A Space Odyssey";
// let numRegex = /\d/g; // Change this line
// let result = movieName.match(numRegex);

// console.log(result);

// -----------------------------------------------------

// ----------- Match All Non-Numbers -------------------

// let movieName = "2001: A Space Odyssey";
// let noNumRegex = /\D/g; // Change this line
// let result = movieName.match(noNumRegex);
// let result1 = movieName.match(noNumRegex).length;

// console.log(result,result1);

// -----------------------------------------------------

// ---------- Match Whitespace --------------------

// let whiteSpace = "Whitespace. Whitespace everywhere!"
// let spaceRegex = /\s/g;
// let result = whiteSpace.match(spaceRegex);

// console.log(result);

// ------------ Specify Upper and Lower Number of Matches ----------------

/* Recall that you use the plus sign + to look for one or more characters and the asterisk * to look for zero or more characters. 
These are convenient but sometimes you want to match a certain range of patterns.

You can specify the lower and upper number of patterns with quantity specifiers. 
Quantity specifiers are used with curly brackets ({ and }). You put two numbers between the curly brackets - for the lower and upper number of patterns.

For example, to match only the letter a appearing between 3 and 5 times in the string ah, your regex would be /a{3,5}h/. */

// let A4 = "aaaah";
// let A2 = "aah";
// let multipleA = /a{3,5}h/;
// console.log(A4.match(multipleA));
// console.log(A2.match(multipleA));

// ----------------------------------

// -------- 3 and more characters --------

// let A4 = "haaaah";
// let A2 = "haah";
// let A100 = "h" + "a".repeat(100) + "h";
// let multipleA = /ha{3,}h/;

// let result1 = A4.match(multipleA);
// let result2 = A2.match(multipleA);
// let result3 = A100.match(multipleA);

// console.log([result1,result2,result3]);

// ---------------------------------------


// --------- Specify Exact Number of Matches ----

// the example allow just 4 characters

// let timStr = "Timmmmber";
// let timRegex = /Tim{4}ber/; // Change this line
// let result = timRegex.test(timStr);

// let resulty = timStr.match(timRegex);

// console.log([result,resulty]);

// ------------- Check for All or None -------------------

// let american = "color";
// let british = "colour";
// let rainbowRegex= /colou?r/;

// console.log([rainbowRegex.test(american),american.match(rainbowRegex)]);
// console.log([rainbowRegex.test(british),british.match(rainbowRegex)]);

// ---------------------------------------------

// let favWord = "favorite";
// let favRegex = /favou?rite/; // Change this line
// let result = favRegex.test(favWord);

// let resulty = favWord.match(favRegex)

// console.log(result,resulty)

// ------------------------------------------------

// ------- Positive and Negative Lookahead ---------

// let quit = "qu";
// let noquit = "qt";
// let quRegex= /q(?=u)/;
// let qRegex = /q(?!u)/;

// let result = quit.match(quRegex);
// let result1 = noquit.match(qRegex);

// //console.log(result,result1);
// console.log([quRegex.test(quit),qRegex.test(qRegex)]);

// ---------------------------------

// let sampleWord = "astronaut";
// let pwRegex = /(?=\w{6})(?=\w*\d{2})/; // Change this line
// let result = pwRegex.test(sampleWord);

// console.log(result)

// ------------------------------



// ---------- Check For Mixed Grouping of Characters -------------

/*
Sometimes we want to check for groups of characters using a Regular Expression and to achieve that we use parentheses ().
If you want to find either Penguin or Pumpkin in a string, you can use the following Regular Expression: /P(engu|umpk)in/g
Then check whether the desired string groups are in the test string by using the test() method.
*/

// let testStr = "Pumpkin";
// let testRegex = /P(engu|umpk)in/;
// let result = testRegex.test(testStr);
// console.log(result);

// --------------------------------------------------

// let myString = "Eleanor Roosevelt";
// let myRegex = /(Franklin|Eleanor) (([A-Z]\.?|[A-Z][a-z]+) )?Roosevelt/; // Change this line
// let result = myRegex.test(myString); // Change this line
// // After passing the challenge experiment with myString and see how the grouping works

// console.log(result);

// --------- Reuse Patterns Using Capture Groups -----------------

// let repeatStr = "row row row your boat";
// let repeatRegex = /(\w+) \1 \1/;
// let result = repeatRegex.test(repeatStr); // Returns true
// let resulty = repeatStr.match(repeatRegex); // Returns ["row row row", "row"]

// console.log(result,resulty);

// --------------------------------------------

// ------------ Use Capture Groups to Search and Replace --------------

// let wrongText = "The sky is silver.";
// let silverRegex = /silver/;
// let result = wrongText.replace(silverRegex, "blue");

// console.log(result);



/* 

You can also access capture groups in the replacement string with dollar signs ($).
"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1'); 

The replace call would return the string (Camp Code).

*/

// --- example 2 ---

// let str = "one two three";
// let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
// let replaceText = "$3 $2 $1"; // Change this line
// let result = str.replace(fixRegex, replaceText);

// console.log(result);

// --------------------------------------------

// ---------- Remove Whitespace from Start and End -----------

// let hello = "   Hello, World!  ";
// let wsRegex = /^\s+|\s+$/g; // Change this line
// let result = hello.replace(wsRegex, ""); // Change this line

// console.log(result); 

// ------------------------------