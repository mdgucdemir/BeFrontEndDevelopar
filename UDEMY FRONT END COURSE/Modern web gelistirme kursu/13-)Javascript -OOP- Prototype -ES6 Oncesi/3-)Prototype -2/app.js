
// function Employee(name,age){
//     this.name = name;
//     this.age = age;
//     this.showInfo = function(){
//         console.log("Name: "+ this.name + " Age: " + this.age);
//     }
// }

// const emp1 = new Employee("memo",32);
// const emp2 = new Employee("deno",23);

// console.log(emp1);
// console.log(emp2);
// emp2.showInfo();


// // yazdiklarimizin bellekte fazla yer kaplamamasi icin bazi seyleri prototype lerde yazmaliyiz. 
// /* Ornegin yukarida 2 tane metod olarak birbirine benzeyen obje olusturuldu eger bundan 100 tane olsa idi her birinin 100 tane metodu olucakti 
//    Ama bu metodu prototype da tanimlar isek bu 100 objenin ortak 1 tane metodu olur ve 100 tane 1 metoddan beslenir, boylece bellekte yer tasarufu yapariz
// */

// // Yukarida ki ornegi daha guzel hale getirelim

function Employee(name,age){
    this.name = name;
    this.age = age;
}

// yazdigimiz showInfos metodu nu prototype da tanimladik
Employee.prototype.showInfos = function(){
    console.log("Name: "+ this.name + " Age: " + this.age);
}

const emp1 = new Employee("mehmet", 21);
const emp2 = new Employee("Deniz",43);

console.log(emp1);
console.log(emp2);