
// // Union Types

function combine(input1: number | string, input2: number | string) { // this is the ( union ) type. by the way, you can add many types like (boolean,undefine) 
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2; // for numbers
    } else {
        result = input1.toString() + input2.toString(); // for strings
    }
    return result;       
}

const combinedAges = combine(30,26);
console.log(combinedAges);

const combinedNames = combine('Max','Anna');
console.log(combinedNames);
