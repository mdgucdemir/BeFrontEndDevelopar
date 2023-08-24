
/////////////////////////

// function sumAll(arr) {
//     let sum = 0;
//     for(let i = Math.min(...arr); i <= Math.max(...arr); i++){
//       sum += i;
//     }
//     return sum;
//   }
  
//   let result = sumAll([1, 4]);
//   console.log(result);

////////////////////////////

// const fruits = ['apple', 'banana', 'orange', 'grape'];

// const hasBanana = fruits.includes('banana');
// console.log(hasBanana); // true

// const hasPineapple = fruits.includes('pineapple');
// console.log(hasPineapple); // false

/////////////////////////

// function diffArray(arr1, arr2) {
//     return arr1
//     .concat(arr2)
//     .filter(item => !arr1.includes(item) || !arr2.includes(item));
// }
  
// let result = diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
// console.log(result);

/////////////////////////////

// function destroyer(arr, ...other) {
//     return arr.filter(item => !other.includes(item));
//   }
  
//   let result = destroyer([1, 2, 3, 1, 2, 3], 2, 3);
//   console.log(result);

//////////////////////////////////

// function whatIsInAName(collection, source) {
//     let sourceKeys = Object.keys(source);
  
//     return collection
//     .filter(obj => sourceKeys.every(key => obj[key] === source[key])); 
  
//   }
  
//   let r = whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
  
//   console.log(r);

////////////////////////////////////////

