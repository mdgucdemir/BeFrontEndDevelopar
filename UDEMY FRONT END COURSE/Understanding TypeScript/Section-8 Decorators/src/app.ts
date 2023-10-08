// // --- Decorators --- \\ \\

// // --- First class decorator ---
// function Logger(constructor: Function) {
//     console.log('Logging...');
//     console.log(constructor);
// }

// // --- Working with Decorator Factories ---
function Logger(logString: string) {
    console.log('This is `Logger Console`.');

    return function(constructor: Function) {
       console.log(logString);
       console.log(constructor); 
    }    
}

// // --- Building Most Useful Decorators ---
function WithTemplate(tamplate: string, hookId: string) {
    console.log('This is `With Template Console`.');
    // return function(_:Function) {
        return function(constructor: any) {
        console.log('Faso Fosik');
        const hookEl = document.getElementById(hookId);
        const p = new constructor();
        if (hookEl) {
            hookEl.innerHTML = tamplate;
            hookEl.querySelector('h1')!.textContent = p.name;
        }
    }
}
@Logger('LOGGING-PERSON') // this is decorator. If you want make decorator you must use this symbol ' @ '.
@WithTemplate('<h1>My Person Object</h1>','app')
class Person {
    name = "Deniz";

    constructor() {
        console.log('Creating Person Object...');
    }
}
const pers = new Person();
console.log(pers)


// // --- Diving into Property Decorators ---

function Log(target: any, propertyName: string | Symbol) {
    console.log('Property decorator!');
    console.log(target, propertyName);
}

class Product {
    @Log
    title: string;
    private _price: number;

    set price(val: number) {
        if(val) {
            this._price = val;
        }
        else {
            throw new Error ('Invalid price - should be positive!');
        }
        
    }   

    constructor(t: string , p: number) {
        this.title = t;
        this._price = p;
    }
    getPriceWithTax(tax: number) {
        return this._price * (1 + tax);
    }
}