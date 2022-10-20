
//                    Object Create Metodu

// Object create Metodu bir objeyi olustururken Prototype ini baska bir objeden olusturmamizi sagliyor. 

// const obj = {
//     test1:function(){
//         console.log("Test 1");
//     },
//     test2:function(){
//         console.log("Test 2");
//     }
// }
// // console.log(obj);

// // Yeni bir obje yarat ve (obj) objesi ile bagla. Yeni yarattigin (emp) objesinin prototype i (obj) yi gosterecektir.

// const emp = Object.create(obj);

// // object e yeni ozellikler ekleyelim

// emp.name = "Mehmet";
// emp.age = 31;
// console.log(emp);



// Ornekler le devamke



function Person (){

}

Person.prototype.test1 = function(){
    console.log("test 1");
}

Person.prototype.test2 = function(){
    console.log("test 2");
}

// const person = new Person();
// console.log(person);

// yukaridaki Person i baska bir prototype ile dah baglamak istiyoruz

function Employee (name,age){
    this.name = name;
    this.age = age;
}

// Employee prototype ini Person Prototype i na bagla

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.myTest = function(){
    console.log("my test")
}

const emp = new Employee("memo",25);

console.log(emp);