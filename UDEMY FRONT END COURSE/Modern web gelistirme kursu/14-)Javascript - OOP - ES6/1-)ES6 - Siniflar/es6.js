
// ECMAScript 6 da class (sinif) lari ogrenicez ve bu class lardan object ler yapacagiz

// ES6 dan once inheritance (miras) olaylarini prototype ile yapiyor idik ama simdi ES6 ile nasil yapilacagini gorucez
// Yeni yazim aslinda eski yazima cevriliyor.

// ES6 class larina litareturda [ Syntactic Sugar ] deniliyor.


// // ----------------- Ilk once Eski yazim ile --------------------------------

// function Employee (name,age,salary) { // Function 
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
// }

// Employee.prototype.showInfos = function (){ // function prototype ozellik atama
//     console.log("Name: " + this.name + " Age: " + this.age + " Salary: " + this.salary);
// }

// const emp = new Employee("mehmet",32,12345); // constructor da obje olusturma

// console.log(emp); 

// //------------------------------------------------------------------------------------



// ----------------------------------- ES6 Ile Yazim -----------------------------------


class Employee {

    constructor(name,age,salary){
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    // Prototype a metod yazimi yada metod yazimi ShowInfos gibi

    showInfos(){
        console.log("Name: " + this.name + " Age: " + this.age + " Salary: " + this.salary);
    }
}

// Obje olusturma yontemi ise AYNI

const emp = new Employee("Deniz",31,12345);

console.log(emp);