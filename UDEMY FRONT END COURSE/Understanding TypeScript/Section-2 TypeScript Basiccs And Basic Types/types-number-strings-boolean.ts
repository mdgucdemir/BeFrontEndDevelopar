

// // -- Types = number, string --

// function add(n1: number,n2: number) {
//     // if(typeof n1 !== 'number' || typeof n2 !== 'number') {
//     //     throw new Error('Incorrect Input!');
//     // }
//     return n1 + n2;
// }




// // -- working with numbers strings and boolean --


// function add(n1:number,n2:number, showResult:boolean, phrase:string) {
//     if(showResult) {
//         console.log(phrase + n1 + n2); // result is : 52.8 ==> It is not I want 
//     } else {
//          return n1 + n2;
//     }   
// }


function add(n1:number,n2:number, showResult:boolean, phrase:string) {
    const result = n1 + n2;
    if(showResult) {
        console.log(phrase + result); // problem solved 
    } else {
         return result;
    }   
}

let number1:number;
number1 = 5;
const number2 = 2.8;
const printResult = true;
let resultPhrase = 'Result is: ';


add(number1,number2,printResult,resultPhrase);
