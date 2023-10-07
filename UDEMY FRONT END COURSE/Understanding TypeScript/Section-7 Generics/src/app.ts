
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




// // --- Generic Classes ---
// // working with primitive type, that is the good idea. Reference type to delete something (name, age, etc) not easy. cause that's the Javascript.

class DataStorage<T extends number | string | boolean> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }
    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item),1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage<string>();
textStorage.addItem('Max');
textStorage.addItem('Caroline');
textStorage.removeItem('Max');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number >();
numberStorage.addItem(33);
numberStorage.addItem(54);
numberStorage.addItem(4080);
numberStorage.removeItem(54);
console.log(numberStorage.getItems());

// const objStorage = new DataStorage<object>();
// objStorage.addItem({name: 'meacun'});
// objStorage.addItem({name: 'sosy'});
// objStorage.addItem({name: 'mosy'});
// // ...
// objStorage.removeItem({name: 'mosy'});
// console.log(objStorage.getItems);
// // ==>> work with primitive types



// // --- Generic Utility(fayda) Types ---

// // --- Partial ---
interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}
function createCourseGoal (title: string, description: string, date: Date): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal;
}

// // --- Readonly ---
const names2: Readonly<string[]> = ['Max', 'Anna'];
// names2.push('Manu');
// names2.pop();




// // --- Generic Types vs Union Types ---
// Konu hakkinda section 7 deki --Generic Types vs Union Types-- isimli video yu izleyebilir ve de chatgpt den yararlanabilirsin