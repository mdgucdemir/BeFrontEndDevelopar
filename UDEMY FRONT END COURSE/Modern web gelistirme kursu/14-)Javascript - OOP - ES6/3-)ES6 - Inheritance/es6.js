// ----------------------------------------------- ES6 Inheritance----------------------------------------

// // ---------------------------------------------- Eski yazim ---------------------------------------------

// function Person (name,age,salary){
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
// }

// Person.prototype.showInfos = function(){
//     console.log("name: "+this.name+" age: "+this.age);
// }

// function Employee(name,age,salary){
//     Person.call(this,name,age);
//     this.salary = salary;
// }

// Employee.prototype = Object.create(Person.prototype);
// Employee.prototype.toString = function(){
//     console.log("Employee");
// }

// Employee.prototype.showInfos = function(){
//     console.log("name: "+this.name+" age: "+this.age+" salary: "+this.salary);
// }

// const emp = new Employee("Deniz",23,12345);


// ------------------------------------------------- ES6 ile yeni Yazim -------------------------------------------------

class Person { // SuperClass || BaseClass

    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    showInfos(){
        console.log("name: "+this.name+" age: "+this.age);
    }
    toString(){ // Overridng
        console.log("Person");
    }
}

// inheritance icin

class Employee extends Person { // (turetilmis Class) DerivedClass || Subclass (alt Class) || ChildClass (cocuk class)
    
    constructor(name,age,salary){

        // this.name = name;
        // this.age = age;

        super(name,age);
        this.salary = salary;
    }

    // Overrideng Islemi

    showInfos(){ // Overriding
        console.log("name: "+this.name+" age: "+this.age+" salary: "+this.salary);
    }
    toString(){ // Overridng
        console.log("Employee");
    }
}

const emp = new Employee("mehmet",32,12345);

// console.log(emp);

emp.showInfos();
emp.toString();