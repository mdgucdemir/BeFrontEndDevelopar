"use strict";
var _a;
const employee1 = {
    name: "Mehmet deniz",
    privileges: ["admin", "to many"],
    startDate: new Date(),
};
console.log(employee1);
// // More on Type Guards
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInformation(emp) {
    console.log("Name: " + emp.name);
    if ("privileges" in emp) {
        console.log("Privileges: " + emp.privileges);
    }
    if ("startDate" in emp) {
        console.log("Start Date: " + emp.startDate);
    }
}
printEmployeeInformation(employee1);
class Car {
    drive() {
        console.log("Driving...");
    }
}
class Truck {
    drive() {
        console.log("Driving a truck...");
    }
    loadCargo(amount) {
        console.log("Loading Cargo ... " + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    // if('loadCargo' in vehicle) {
    //     vehicle.loadCargo(1000);
    // }
    // // other way
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
    }
    console.log('Moving speed is: ' + speed);
}
moveAnimal({ type: 'bird', flyingSpeed: 10 });
// // --- Type Casting ---
const paragraph = document.getElementById('message-output'); // [as HTMLParagraphElement] bu tur yazim style ini ( react ve jsx ) te kullanabilirsin
const userInputElement = document.getElementById('user-input'); // unlem isareti (exclamation mark) asla null olmadigini gosterir
const goodParagraph = document.getElementById('good');
const notBadParagraph = document.getElementById('not-bad');
userInputElement.value = 'Hi there!';
paragraph.textContent = 'this is result paragraph';
if (notBadParagraph) {
    notBadParagraph.textContent = 'This is not bad.';
}
const errorBag = {
    email: 'not a valid email!',
    1: 'not a valid email',
    username: 'Must start with a capital character!'
};
function addly(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
const resulty = addly('Max', 'Caroline'); // mouse un imlecini (addly) nin uzerine getirisen (3+ overloads) var
resulty.split(' ');
// // --- Optional Chaining --- 
// eger optional chaining i kullanmaz isek console da (error) aliriz
// ama optional chaining i kullanir isek console da ( undefined ) ile karsilasiriz.  
const fetchedUserData = {
    id: 'u1',
    name: 'Deniz',
    job: { title: 'CEO', description: 'My own company' }
};
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
// // --- Nullish Coalescing ---
// // sadece null ve undefined durumlarinda kullanilir ve cift soru isereti ( ?? ) ile yapilir.
// const userInput = null;  
// const userInput = undefined;
const userInput = '';
// const storedData = userInput || "FOSIK";  // userInput [ null - undefined - empty string ] oldugunda FOSIK i dondurur
const storedData = userInput !== null && userInput !== void 0 ? userInput : "FOSIK"; // bu method un adi is [ Nullish Coalescing ] tir, [ null - undefined ] oldugunda FOSIK i dondurur. Fark budur.
console.log(storedData);
