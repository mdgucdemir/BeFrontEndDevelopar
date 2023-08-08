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

let greetings = ['whats up?', 'hello', 'see ya!'];

greetings.pop();  // sondaki elemani siler  -- { push } un zittidir
greetings.shift(); // bastaki elemani siler -- { unshift } in zittidir

console.log(greetings);