// // --- Intersection Types ---
type Admin = {
  name: string;
  privileges: string[];
};
type Employee = {
  name: string;
  startDate: Date;
};
type ElevatedEmployee = Admin & Employee; // this is intersection type
const employee1: ElevatedEmployee = {
  name: "Mehmet deniz",
  privileges: ["admin", "to many"],
  startDate: new Date(),
};
console.log(employee1);
// // and also we can...
type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;

// // More on Type Guards
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}
type UnknownEmployee = Employee | Admin;
function printEmployeeInformation(emp: UnknownEmployee) {
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
  loadCargo(amount: number) {
    console.log("Loading Cargo ... " + amount);
  }
}
type Vehicle = Car | Truck;
const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
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

// // --- Discriminated Unions ---

interface Bird {
    type: 'bird';
    flyingSpeed: number;
}
interface Horse {
    type: 'horse';
    runningSpeed: number;
}
type Animal = Bird | Horse;
function moveAnimal(animal: Animal) {
    let speed;
    switch(animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
    }
    console.log('Moving speed is: ' + speed);
}
moveAnimal({type:'bird', flyingSpeed:10});




// // --- Type Casting ---
const paragraph = document.getElementById('message-output')! as HTMLParagraphElement;  // [as HTMLParagraphElement] bu tur yazim style ini ( react ve jsx ) te kullanabilirsin
const userInputElement = document.getElementById('user-input')! as HTMLInputElement; // unlem isareti (exclamation mark) asla null olmadigini gosterir
const goodParagraph = <HTMLParagraphElement>document.getElementById('good')!;
const notBadParagraph = document.getElementById('not-bad');

userInputElement.value = 'Hi there!';
paragraph.textContent = 'this is result paragraph';

if (notBadParagraph) {
    (notBadParagraph as HTMLParagraphElement).textContent = 'This is not bad.';
}




// // --- Index Properties ---
interface ErrorContainer { // {email: 'not a valid email', username: 'must start with a charcter'}    
    [prop: string]: string; // butun property ler string olmak zorunda demek istedik.
} 
const errorBag: ErrorContainer = {
    email: 'not a valid email!',
    1: 'not a valid email', 
    username: 'Must start with a capital character!'
}



// // --- Function Overloads ---
// bu ornekte typeScript a ve b nin ve hatta function sonuclarinin string veya number oldugunu bilmiyor. Ona biz soyluyoruz. Bunun icin bu islem.
type Combinablely = number | string;
type Numericly = number | boolean;
type Universally = Combinablely & Numericly;

function addly(a: number, b: number): number; // these methods are function overloads
function addly(a: string , b: string): string; // burada tum combinasyonlari yaziyoruz
function addly(a: string , b: number): string;
function addly(a: number , b: number): string; // this function is information 

function addly(a: Combinablely, b: Combinablely) { // this function is declaration
    if(typeof a === 'string' || typeof b === 'string') {
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
    job: {title: 'CEO', description: 'My own company'}
}
console.log(fetchedUserData?.job?.title);





// // --- Nullish Coalescing ---
// // sadece null ve undefined durumlarinda kullanilir ve cift soru isereti ( ?? ) ile yapilir.

// const userInput = null;  
// const userInput = undefined;
const userInput = '';
// const storedData = userInput || "FOSIK";  // userInput [ null - undefined - empty string ] oldugunda FOSIK i dondurur
const storedData = userInput ?? "FOSIK";    // bu method un adi is [ Nullish Coalescing ] tir, [ null - undefined ] oldugunda FOSIK i dondurur. Fark budur.
console.log(storedData);