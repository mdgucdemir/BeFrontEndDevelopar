"use strict";
// --- Built-in Generics & What are Generics? ---
const names = []; // string[]
// names[0].split(' ');
const promise = new Promise((resolve, reject) => {
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
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergeObj = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 32 });
function countAndDescribe(element) {
    let descriptionText = 'Got no value.';
    if (element.length === 1) {
        descriptionText = 'Got 1 value.';
    }
    else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements.';
    }
    return [element, descriptionText];
}
console.log(countAndDescribe('sasd'));
// // --- Another 'keyof' Constraint ---
function extractAndCover(obj, key) {
    return obj[key];
}
extractAndCover({ name: 'Max' }, "name");
// // --- Generic Classes ---
// // working with primitive type, that is the good idea. Reference type to delete something (name, age, etc) not easy. cause that's the Javascript.
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('Max');
textStorage.addItem('Caroline');
textStorage.removeItem('Max');
console.log(textStorage.getItems());
const numberStorage = new DataStorage();
numberStorage.addItem(33);
numberStorage.addItem(54);
numberStorage.addItem(4080);
numberStorage.removeItem(54);
console.log(numberStorage.getItems());
function createCourseGoal(title, description, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
// // --- Readonly ---
const names2 = ['Max', 'Anna'];
// names2.push('Manu');
// names2.pop();
// // --- Generic Types vs Union Types ---
// Konu hakkinda section 7 deki --Generic Types vs Union Types-- isimli video yu izleyebilir ve de chatgpt den yararlanabilirsin
