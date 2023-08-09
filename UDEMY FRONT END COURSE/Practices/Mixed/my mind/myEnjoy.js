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