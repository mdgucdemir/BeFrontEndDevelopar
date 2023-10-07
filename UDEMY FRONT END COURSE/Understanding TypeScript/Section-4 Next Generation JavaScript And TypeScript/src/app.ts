
// // Code goes here

// // const - let - any  (differences)



// // -- function -- 

// // const add = (a: number, b: number) => {
// //     return a + b;
// // }

// const add = (a: number, b: number) => a + b; // one output

// // const printOutput = (output: number | string) => {
// //     console.log(output)
// // }

// const printOutput: (a: number | string) => void = output => console.log(output);


// const button = document.querySelector("button");

// if(button) {
//     button.addEventListener('click', event => console.log(event))
// }




// // -- Spread Operator

const hobbies = ['sport', 'cooking'];
const activeHobbies = ['hiking'];
activeHobbies.push(...hobbies); // spread operator for array

const person = {
    firstName: 'M.Deniz',
    age: 33
}
const copiedPerson = {...person} // spread operator for object




// // -- Rest Parameters

const add = (...numbers: number[]) => { // this is the rest parameters. It looks like spread operator but not it is Rest parameters
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    });
}

const addedNumbers = add(5,2,10,3.7);
console.log(addedNumbers);




// // --- Array & Object Destructuring ---
// // Destructuring doesn't change original Array and Object.

// // - Array Destructuring -
const [hobby1,hobby2, ...remainingHobbies] = hobbies; // this is destructuring  // (hobbies[0] = hobby1) and (hobbies[1] = hobby2) and (hobbies[remaining] = remainingHobbies)
console.log(hobbies, hobby1, hobby2);

// // - Object Destructuring -
const {firstName: username,age} = person;
console.log(username,age);
console.log(username,age, person);