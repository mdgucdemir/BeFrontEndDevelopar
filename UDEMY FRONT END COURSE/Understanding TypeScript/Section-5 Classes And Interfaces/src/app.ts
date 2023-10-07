
// // -- Creating a First Class --

// class Department {
//     name: string;
//     employees: string[] = [];

//     constructor(n:string) {
//         this.name = n;
//     }

//     // describe() {
//     //     console.log('Department is: ' + this.name)
//     // }

//     describe(this: Department) {
//         console.log('Department is: ' + this.name)
//     }

//     addEmployee(employee: string) {
//         this.employees.push(employee);
//     }

//     printEmployeeInformation() {
//         console.log(this.employees.length);
//         console.log(this.employees);
//     }
// }

// const accounting = new Department('Accounting');
// // console.log(accounting);
// accounting.describe();

// const accountingCopy = { describe: accounting.describe };
// const accountingCopy = { name: 'Barzo', describe: accounting.describe };
// accountingCopy.describe();




// // -- "private" and "public" Access Modifiers --

// class Department {
//     public name: string;
//     private employees: string[] = [];

//     constructor(n:string) {
//         this.name = n;
//     }

//     // describe() {
//     //     console.log('Department is: ' + this.name)
//     // }

//     describe(this: Department) {
//         console.log('Department is: ' + this.name)
//     }

//     addEmployee(employee: string) {
//         this.employees.push(employee);
//     }

//     printEmployeeInformation() {
//         console.log(this.employees.length);
//         console.log(this.employees);
//     }
// }

// const accounting = new Department('Accounting');
// accounting.addEmployee('Max');
// accounting.addEmployee('Caroline');

// // accounting.employees[2] = 'Chestnut';

// accounting.describe();
// accounting.printEmployeeInformation();




// // -- Shorthand Initialization --

// class Department {
    
//     private employees: string[] = [];

//     constructor(private readonly id: string ,public name:string) {
//         // this.name = n;
//     }

//     describe(this: Department) {
//         console.log(`Department id: ${this.id} and Department Name: ${this.name}`)
//     }
//     addEmployee(employee: string) {
//         this.employees.push(employee);
//         // this.id = 'id_2'; // // can not assign to id, because id is readonly.
//     }
//     printEmployeeInformation() {
//         console.log(this.employees.length);
//         console.log(this.employees);
//     }
// }

// const accounting = new Department('id_1','Accounting');
// accounting.addEmployee('Max');
// accounting.addEmployee('Caroline');

// accounting.describe();
// accounting.printEmployeeInformation();



// // -- Inheritance --

// class Department {
//     // public name: string
//     // private employees: string[] = [];
//     protected employees: string[] = [];

//     constructor(private readonly id: string ,public name:string) {
//         // this.name = n;
//     }

//     describe(this: Department) {
//         console.log(`Department id: ${this.id} and Department Name: ${this.name}`)
//     }
//     addEmployee(employee: string) {
//         this.employees.push(employee);
//         // this.id = 'id_2'; // // can not assign to id, because id is readonly.
//     }
//     printEmployeeInformation() {
//         console.log(this.employees.length);
//         console.log(this.employees);
//     }
// }

// class ITDepartment extends Department {
//     admins: string[];
//     constructor(id: string, adminS: string[]) {
//         super(id,'IT');
//         this.admins = adminS;
//     }  

// }

// class AccountingDepartment extends Department {
//     private lastReport: string;

//     get mostRecentReport() { // get method for read
//         if(this.lastReport) {

//             return this.lastReport;   // getter method must return something.
//         }
//         throw new Error('No report found.');
//     }

//     set mostRecentReport(value: string) {
//         // setter method needs take an argument
//         if(!value) {
//             throw new Error('Please pass in a valid value!');
//         }
//         this.addReport(value);
//     }

//     constructor(id: string, private reportS: string[]) {
//         super(id,'Accounting Department');
//         this.lastReport = reportS[0];
//     }

//     addReport(text: string) {
//         this.reportS.push(text);
//         this.lastReport = text;
//     }

//     showReports() {
//         console.log(this.reportS);
//     }

//     addEmployee(employee: string): void {
//         if(employee === 'Max') {
//             return;
//         }
//         this.employees.push(employee);
//     }

// }
// const department = new Department('id_1','Main Department');
// const it = new ITDepartment('id_2',['Caroline']);
// it.addEmployee('Max');
// it.addEmployee('Caroline');

// it.describe();
// it.name = 'IT Department';
// it.printEmployeeInformation();
// console.log(it);

// const accounting = new AccountingDepartment('id_3' , []);

// accounting.mostRecentReport = 'year end report'; // setter method trigger like this. You don't need any parenthesis [accounting.mostRecentReport() = '' || you can't use like this.]
// accounting.addReport('Something went wrong...');
// console.log(accounting.mostRecentReport); // for getter method you don't need any parenthesis.

// console.log(accounting);
// accounting.showReports();

// accounting.addEmployee('Max'); // Max not added, cause we declarate a condition
// accounting.addEmployee('Hun');
// accounting.printEmployeeInformation();




// // -- Getter & Setter --

// class Department {
//     // public name: string
//     // private employees: string[] = [];
//     protected employees: string[] = [];

//     constructor(private readonly id: string ,public name:string) {
//         // this.name = n;
//     }

//     describe(this: Department) {
//         console.log(`Department id: ${this.id} and Department Name: ${this.name}`)
//     }
//     addEmployee(employee: string) {
//         this.employees.push(employee);
//         // this.id = 'id_2'; // // can not assign to id, because id is readonly.
//     }
//     printEmployeeInformation() {
//         console.log(this.employees.length);
//         console.log(this.employees);
//     }
// }

// class ITDepartment extends Department {
//     admins: string[];
//     constructor(id: string, adminS: string[]) {
//         super(id,'IT');
//         this.admins = adminS;
//     }  

// }

// class AccountingDepartment extends Department {
//     private lastReport: string;

//     get mostRecentReport() { // get method for read
//         if(this.lastReport) {

//             return this.lastReport;   // getter method must return something.
//         }
//         throw new Error('No report found.');
//     }

//     set mostRecentReport(value: string) {
//         // setter method needs take an argument
//         if(!value) {
//             throw new Error('Please pass in a valid value!');
//         }
//         this.addReport(value);
//     }

//     constructor(id: string, private reportS: string[]) {
//         super(id,'Accounting Department');
//         this.lastReport = reportS[0];
//     }

//     addReport(text: string) {
//         this.reportS.push(text);
//         this.lastReport = text;
//     }

//     showReports() {
//         console.log(this.reportS);
//     }

//     addEmployee(employee: string): void {
//         if(employee === 'Max') {
//             return;
//         }
//         this.employees.push(employee);
//     }

// }
// const department = new Department('id_1','Main Department');
// const it = new ITDepartment('id_2',['Caroline']);
// it.addEmployee('Max');
// it.addEmployee('Caroline');

// it.describe();
// it.name = 'IT Department';
// it.printEmployeeInformation();
// console.log(it);

// const accounting = new AccountingDepartment('id_3' , []);

// accounting.mostRecentReport = 'year end report'; // setter method trigger like this. You don't need any parenthesis [accounting.mostRecentReport() = '' || you can't use like this.]
// accounting.addReport('Something went wrong...');
// console.log(accounting.mostRecentReport); // for getter method you don't need any parenthesis.

// console.log(accounting);
// accounting.showReports();

// accounting.addEmployee('Max'); // Max not added, cause we declarate a condition
// accounting.addEmployee('Hun');
// accounting.printEmployeeInformation();




// // --- Static Methods & Properties

// class Department {
//     // public name: string
//     // private employees: string[] = [];
//     protected employees: string[] = [];
//     static thisYear: number = 2023;

//     constructor(private readonly id: string ,public name:string) {
//         // this.name = n;
//         // console.log(this.thisYear);  // you can't use it the static method
//         // console.log(Department.thisYear) // you can use it the static method
//     }

//     describe(this: Department) {
//         console.log(`Department id: ${this.id} and Department Name: ${this.name}`)
//     }
//     addEmployee(employee: string) {
//         this.employees.push(employee);
//         // this.id = 'id_2'; // // can not assign to id, because id is readonly.
//     }
//     printEmployeeInformation() {
//         console.log(this.employees.length);
//         console.log(this.employees);
//     }

//     static createEmployee(name: string) { // this is the static method
//         return {name: name};
//     }
// }

// class ITDepartment extends Department {
//     admins: string[];
//     constructor(id: string, adminS: string[]) {
//         super(id,'IT');
//         this.admins = adminS;
//     }  

// }

// class AccountingDepartment extends Department {
//     private lastReport: string;

//     get mostRecentReport() { // get method for read
//         if(this.lastReport) {

//             return this.lastReport;   // getter method must return something.
//         }
//         throw new Error('No report found.');
//     }

//     set mostRecentReport(value: string) {
//         // setter method needs take an argument
//         if(!value) {
//             throw new Error('Please pass in a valid value!');
//         }
//         this.addReport(value);
//     }

//     constructor(id: string, private reportS: string[]) {
//         super(id,'Accounting Department');
//         this.lastReport = reportS[0];
//     }

//     addReport(text: string) {
//         this.reportS.push(text);
//         this.lastReport = text;
//     }

//     showReports() {
//         console.log(this.reportS);
//     }

//     addEmployee(employee: string): void {
//         if(employee === 'Max') {
//             return;
//         }
//         this.employees.push(employee);
//     }

// }

// const employee1 = Department.createEmployee("Andy");  // this is static method's benefit
// console.log(employee1, Department.thisYear);

// const department = new Department('id_1','Main Department');
// const it = new ITDepartment('id_2',['Caroline']);
// it.addEmployee('Max');
// it.addEmployee('Caroline');

// it.describe();
// it.name = 'IT Department';
// it.printEmployeeInformation();
// console.log(it);

// const accounting = new AccountingDepartment('id_3' , []);

// accounting.mostRecentReport = 'year end report'; // setter method trigger like this. You don't need any parenthesis [accounting.mostRecentReport() = '' || you can't use like this.]
// accounting.addReport('Something went wrong...');
// console.log(accounting.mostRecentReport); // for getter method you don't need any parenthesis.

// console.log(accounting);
// accounting.showReports();

// accounting.addEmployee('Max'); // Max not added, cause we declarate a condition
// accounting.addEmployee('Hun');
// accounting.printEmployeeInformation();




// // --- Abstract Classes ---

// abstract class Animal {
//     constructor(protected name: string) {}

//     abstract makeSound(): void; // Soyut yontem (abstract method)
// }

// class Dog extends Animal {
//     makeSound(): void {
//         console.log(`${this.name} barks.`);
//     }
// }

// class Cat extends Animal {
//     makeSound(): void {
//         console.log(`${this.name} meows.`);
//     }
// }

// const myDog = new Dog('Dog');
// const myCat = new Cat('Cat');

// myDog.makeSound();  // Output = Dog barks.
// myCat.makeSound(); // Output = Cat meows.




// // --- Singleton() & private Constructor ---
// class Singleton {
//     private static instance: Singleton | null = null;
  
//     private constructor() {}
  
//     public static getInstance(): Singleton {
//       if (Singleton.instance === null) {
//         Singleton.instance = new Singleton();
//       }
//       return Singleton.instance;
//     }
  
//     public doSomething() {
//       console.log("Singleton is doing something.");
//     }
//   }
  
//   const instance1 = Singleton.getInstance();
//   const instance2 = Singleton.getInstance();
  
// console.log(instance1 === instance2); // true, aynı nesne
  



// // --- First Interface ---

// interface Person {
//   name: string;
//   age: number;

//   greet(phrase: string): void;
// }

// let user1: Person;

// user1 = {
//   name: 'Deniz',
//   age: 33,
//   greet(phrase: string) {
//     console.log(phrase + ' ' + this.name);
//   }
// }

// user1.greet('Hi I`m');




// // --- Using Interfaces with Classes

// interface Greetable {
//   readonly name: string;
  

//   greet(phrase: string): void;
// }

// class Person implements Greetable {
//   name: string;
//   age = 33;

//   constructor(n: string) {
//     this.name = n;    
//   }

//   greet(phrase: string): void {
//       console.log(phrase + ' ' + this.name + ' ' + 'and I am ' + this.age + ' ' + 'years old');
//   }
// }

// let user1: Greetable;
// user1 = new Person('Deniz');
// user1.greet('Hi I`m');
// console.log(user1);
// user1.name = 'babus'; // name'i readonly yaptigimiz icin sonradan boyle bir atama yapilamaz



// // --- Extending Interfaces ---

interface Named {  
  readonly name: string;
}

interface Greetable extends Named { 

  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age = 33;
  address?: string; // this is optional property 

  constructor(n: string, location?: string) { // // location is optional parameter
    this.name = n;   
    this.address = location; // // optinal and there is no error 
  }

  greet(phrase: string): void {
      console.log(phrase + ' ' + this.name + ' ' + 'and I am ' + this.age + ' ' + 'years old');
  }
}

let user1: Greetable;
user1 = new Person('Deniz');
user1.greet('Hi I`m');
console.log(user1);


// // -- Interfaces as Function Types --- 

interface AddFn {
  (a: number, b: number): number;
}

let add:AddFn;
add = (n1: number,n2:number) => {
  return n1 + n2;
}