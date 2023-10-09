"use strict";
// // --- Decorators --- \\ \\
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// // --- First class decorator ---
// function Logger(constructor: Function) {
//     console.log('Logging...');
//     console.log(constructor);
// }
// // --- Working with Decorator Factories ---
function Logger(logString) {
    console.log("This is `Logger Console`.");
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
// // --- Building Most Useful Decorators ---
function WithTemplate(tamplate, hookId) {
    console.log("This is `With Template Console`.");
    // return function(_:Function) {
    return function (originalConstructor) {
        return class extends originalConstructor {
            constructor(..._) {
                super();
                console.log("Faso Fosik");
                const hookEl = document.getElementById(hookId);
                // const p = new originalConstructor();
                if (hookEl) {
                    hookEl.innerHTML = tamplate;
                    hookEl.querySelector("h1").textContent = this.name;
                }
            }
        };
    };
}
let Person = class Person {
    constructor() {
        this.name = "Deniz";
        console.log("Creating Person Object...");
    }
};
Person = __decorate([
    Logger("LOGGING-PERSON") // this is decorator. If you want make decorator you must use this symbol ' @ '.
    ,
    WithTemplate("<h1>My Person Object</h1>", "app")
], Person);
const pers = new Person();
console.log(pers);
// // --- Diving into Property Decorators ---
function Log(target, propertyName) {
    console.log("Property decorator!");
    console.log(target, propertyName);
}
// // --- Accesor & Parameter Decorators ---
function Log2(target, name, descriptor) {
    console.log("Accessor decorator!");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function Log3(target, name, descriptor) {
    console.log("Method decorator!");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function Log4(target, name, position) {
    console.log("Parameter decorator!");
    console.log(target);
    console.log(name);
    console.log(position);
}
class Product {
    set price(val) {
        if (val) {
            this._price = val;
        }
        else {
            throw new Error("Invalid price - should be positive!");
        }
    }
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    Log
], Product.prototype, "title", void 0);
__decorate([
    Log2
], Product.prototype, "price", null);
__decorate([
    Log3,
    __param(0, Log4)
], Product.prototype, "getPriceWithTax", null);
