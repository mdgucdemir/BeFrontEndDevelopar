// // --- Decorators --- \\ \\

// // --- First class decorator ---
// function Logger(constructor: Function) {
//     console.log('Logging...');
//     console.log(constructor);
// }

// // --- Working with Decorator Factories ---
function Logger(logString: string) {
  console.log("This is `Logger Console`.");

  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

// // --- Building Most Useful Decorators ---
function WithTemplate(tamplate: string, hookId: string) {
  console.log("This is `With Template Console`.");
  // return function(_:Function) {
  return function<T extends {new(...arg: any[]): {name: string}}> (originalConstructor: T) {
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();
        console.log("Faso Fosik");
        const hookEl = document.getElementById(hookId);
        // const p = new originalConstructor();
        if (hookEl) {
          hookEl.innerHTML = tamplate;
          hookEl.querySelector("h1")!.textContent = this.name;
        }
      }
    };
  };
}
@Logger("LOGGING-PERSON") // this is decorator. If you want make decorator you must use this symbol ' @ '.
@WithTemplate("<h1>My Person Object</h1>", "app")
class Person {
  name = "Deniz";

  constructor() {
    console.log("Creating Person Object...");
  }
}
const pers = new Person();
console.log(pers);

// // --- Diving into Property Decorators ---
function Log(target: any, propertyName: string | Symbol) {
  console.log("Property decorator!");
  console.log(target, propertyName);
}

// // --- Accesor & Parameter Decorators ---
function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Accessor decorator!");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}
function Log3(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log("Method decorator!");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}
function Log4(target: any, name: string | Symbol, position: number) {
  console.log("Parameter decorator!");
  console.log(target);
  console.log(name);
  console.log(position);
}
class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
  set price(val: number) {
    if (val) {
      this._price = val;
    } else {
      throw new Error("Invalid price - should be positive!");
    }
  }
  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }
  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}
