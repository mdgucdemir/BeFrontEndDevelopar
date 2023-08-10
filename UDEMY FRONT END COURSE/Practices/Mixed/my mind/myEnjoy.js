// let receivables = 10;
// let payables = 8;
// let netWorkingCapital = receivables - payables;
// console.log(`Net working capital is: ${netWorkingCapital}`);

////////////////////////////////////////////////////

// const allSameQuotes = 'I\'ve had a perfectly wonderful evening, but this wasn\'t it.';
// const grouchoContraction = "I've had a perfectly wonderful evening, but this wasn't it.";
// const quoteInString = "Groucho Marx once said 'Quote me as saying I was mis-quoted.'";
// //console.log(allSameQuotes);
// console.log(quoteInString);

////////////////////////////////////////////////////

// function myFunction() {
//     return "You rock!";
//   }
// let varOne = myFunction;
//  let varTwo = myFunction();

//  //console.log(varOne);
//  console.log(varTwo);

///////////////////////////////

// let alphabet = "abcdefghijklmnopqrstuvwxyz";
// let len = alphabet.length;
// for (let i = 0; i <= len; i++) {
//   console.log(alphabet[i]);
// }
// for (let j = 1; j < len; j++) {
//   console.log(alphabet[j]);
// }
// for (let k = 0; k < len; k++) {
//   console.log(alphabet[k]);
// }

/////////////////////////////////////////

// let simpleArray = ['one', 2, 'three', true, false, undefined, null];
// console.log(simpleArray.length); // 7 

/////////////////////////////////////

// let twentyThree = 'XXIII';
// let romanNumerals = ['XXI', 'XXII'];

// romanNumerals.unshift('XIX', 'XX');
// romanNumerals.push(twentyThree);

// console.log(romanNumerals);
// //console.log(twentyThree);

//////////////////////////

// let greetings = ['whats up?', 'hello', 'see ya!'];

// greetings.pop();  // sondaki elemani siler  -- { push } un zittidir
// greetings.shift(); // bastaki elemani siler -- { unshift } in zittidir

// console.log(greetings);

////////////// splice(a,b) //////////////////

// let array = ['today', 'was', 'not', 'so', 'great'];

// array.splice(2, 2);
// console.log(array);

// Array ler sifirdan baslar [0,1,2,3,4] gibi
// splice(a,b) a = arrayin kacinci elemanini sececeksin b= a. dan itibaren kac eleman sileceksin

/////////////// splice(a,b,c,d) ///////////////////

// const numbers = [10, 11, 12, 12, 15];
// const startIndex = 3;
// const amountToDelete = 1;

// numbers.splice(startIndex, amountToDelete, 13, 14); // 3. elemana gidildi. 1 elemen silindi. 13 ve 14 ereye eklendi
// console.log(numbers); // [10,11,12,13,14,15]

////////////// slice() ///////////////

// let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];

// let todaysWeather = weatherConditions.slice(1, 3); // [0,1,2,3,4,5] -- 1 den basla 3 e kadar ama 3 u alma cikti = (1 ve 2)

// console.log(todaysWeather);

////// more example ///////

// function forecast(arr) {
//   // Only change code below this line

//   return arr.slice(2,4);
// }

// // Only change code above this line
// console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

//////////////////////////////////

///// Copy an Array with the Spread Operator /////

// function copyMachine(arr, num) {
//     let newArr = [];
//     while (num >= 1) {
//       // Only change code below this line
//   newArr.push([...arr]);
//       // Only change code above this line
//       num--;
//     }
//     return newArr;
//   }
  
//   console.log(copyMachine([true, false, true], 2));

  /////////////////////////////////////////////////



  //// Combine Arrays with the Spread Operator ////

//   function spreadOut() {
//     let fragment = ['to', 'code'];
//     let sentence = ['learning', ...fragment, 'is', 'fun'];
//     return sentence;
//   }
  
//   console.log(spreadOut());

/////////////////////////////

//////// indexOf() ////////////////

// bu metod array de aramak istedimiz elemanin olup olmadigini gosterir. Elemam var ise (1,2,3 ...{yani pozitif sayilar ile gosterim yapar} ), yok ise (-1) sonucunu verir

// let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

// console.log(fruits.indexOf('apples'));
// console.log(fruits.indexOf('oranges'));
// console.log(fruits.indexOf('pears'));
// console.log(fruits.indexOf('peaches'));

///// an other example

// function quickCheck(arr, elem) {
//     // Only change code below this line
//   return arr.indexOf(elem) >= 0 ? true : false;
//     // Only change code above this line
//   }
  
//   console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

/////////////////////////////////////////////////

// function greaterThanTen(arr) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] > 10) {
//         newArr.push(arr[i]);
//       }
//     }
//     return newArr;
//   }
  
//   console.log(greaterThanTen([2, 12, 8, 14, 80, 0, 1]));


//////////////// Add Key-Value Pairs to JavaScript Objects /////////////////////////

// const tekkenCharacter = {
//   player: 'Hwoarang',
//   fightingStyle: 'Tae Kwon Doe',
//   human: true
// };

// tekkenCharacter.origin = 'United States';
// tekkenCharacter['hair color'] = 'Yellow';

// const eyes = 'eye color';
// tekkenCharacter[eyes] = 'blue';

// console.log(tekkenCharacter);


////////

// let foods = {
//   apples: 25,
//   oranges: 32,
//   plums: 28
// };

// // Only change code below this line
// foods.bananas = 13;
// foods['grapes'] = 35

// const fosik = 'strawberries';
// foods[fosik] = 27;
// // Only change code above this line

// console.log(foods);

/////////////////////////////

/////////// Modify an Object Nested Within an Object //////////////////

// let nestedObject = {
//   id: 28802695164,
//   date: 'December 31, 2016',
//   data: {
//     totalUsers: 99,
//     online: 80,
//     onlineStatus: {
//       active: 67,
//       away: 13,
//       busy: 8
//     }
//   }
// };

// nestedObject.data.onlineStatus.busy = 10;

// console.log(nestedObject);


//// An other Example

// let userActivity = {
//   id: 23894201352,
//   date: 'January 1, 2017',
//   data: {
//     totalUsers: 51,
//     online: 42
//   }
// };

// // Only change code below this line
// userActivity.data.online = 45
// // Only change code above this line

// console.log(userActivity);


/////////////////////////////////////////

///// Access Property Names with Bracket Notation /////

// let foods = {
//   apples: 25,
//   oranges: 32,
//   plums: 28,
//   bananas: 13,
//   grapes: 35,
//   strawberries: 27
// };

// function checkInventory(scannedItem) {
//   // Only change code below this line
// return foods[scannedItem]
//   // Only change code above this line
// }

// console.log(checkInventory("apples"));

////////////////////////////////////////