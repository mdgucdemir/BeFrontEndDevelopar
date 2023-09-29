
// // Function as Types


function add(n1: number, n2: number) {
    return n1+n2;
}

function printResult(num: number): void { // this is void because you use string and number together
    console.log('Result: ' + num);
}
printResult(add(5,12));

// let combineValues;
// let combineValues: Function;
let combineValues: (a: number, b:number) => number;  // this is the function by the way

combineValues = add; // this is function now.
// combineValues = printResult; // this code give us --> console.log --> Result: 8 and undefined
// combineValues = 5; // TypeError: combineValues is not a function. 

console.log(combineValues(8,8));