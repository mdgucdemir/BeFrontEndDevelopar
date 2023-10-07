
// --- Built-in Generics & What are Generics? ---

const names: Array<string> = []; // string[]
// names[0].split(' ');

const promise: Promise<number> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 2000);
});
promise.then(data => {
    // data.split(' ');
});




// // --- Creating a Generic Function ---
// function merge<T, U>(objA: T, objB: U) {
//     return {...objA, ...objB};
// }
// const mergeObj = merge({name: 'max', hobbies:["Sports"]},{age: 32});
// console.log(mergeObj, mergeObj.age, mergeObj.name);




// // --- Working with Constraints(Kisaltmalar) ---
function merge<T extends Object, U extends Object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}
const mergeObj = merge({name: 'Max', hobbies: ['Sports']},{age: 32});
// console.log(mergeObj);



// // --- Another Generic Function ---

interface Lengthy {
    length: number;
}
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'Got no value.';
    if(element.length === 1) {
        descriptionText = 'Got 1 value.';
    }
    else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements.';
    }
    return [element, descriptionText];
}
console.log(countAndDescribe('sasd'));




// // --- Another 'keyof' Constraint ---

function extractAndCover<T extends object,U extends keyof T>(obj: T, key: U) {
    return obj[key];
}
extractAndCover({name: 'Max'}, "name");