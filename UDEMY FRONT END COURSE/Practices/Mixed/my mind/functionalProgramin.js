
/*

------------------------------- Learn About Functional Programming -------------------------
Functional programming is a style of programming where solutions are simple, isolated functions, 
without any side effects outside of the function scope: [ INPUT -> PROCESS -> OUTPUT ]

Functional programming is about:

1- Isolated functions - there is no dependence on the state of the program, which includes global variables that are subject to change
2- Pure functions - the same input always gives the same output
3- Functions with limited side effects - any changes, or mutations, to the state of the program outside the function are carefully controlled

*/

///////////

// const prepareTea = () => 'greenTea';
// const getTea = (numOfCups) => {
//     const teaCups = [];
  
//     for(let cups = 1; cups <= numOfCups; cups += 1) {
//       const teaCup = prepareTea();
//       teaCups.push(teaCup);
//     }
//     return teaCups;
//   };
  
// const tea4TeamFCC = getTea(40);

///////////////////////////////////

// // The global variable
// const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// // Change code below this line
// function add(list, bookName) {
//   return [...list, bookName];  
//   // Change code above this line
// }

// // Change code below this line
// function remove(list, bookName) {  
//     return list.filter(book => book !== bookName);
//     // Change code above this line    
// }

// var newBookList = add(bookList, 'A Brief History of Time');
// var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
// var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

// console.log(bookList);

//////////////////////////////////
