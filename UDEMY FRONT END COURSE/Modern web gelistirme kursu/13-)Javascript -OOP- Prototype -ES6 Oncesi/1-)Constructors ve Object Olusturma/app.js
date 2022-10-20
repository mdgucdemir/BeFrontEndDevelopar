
//                                    OPP -- OBJECT ORIENTED PROGRAMMING -- (Obje(nesne) odakli programlama)

// Javascrip te OPP C# ve Java ya nispeten daha az geliskindir 
// Ornekler ile devam edelim

// bizim [window] obje miz vardi, daha onceki uygulamalarda kullanmistik

// console.log(window);
// window obje sinin kendi icerisinde metodlari vardi, mesala ornegini yaptigimiz [local storage] gibi


// bir baska obje ornegimiz [this] idi

// console.log(this);

// [this] icerisinde bulundugumuz objeyi gosteren bir tane anahtar kelimemiz
// Yukaridaki ornekte bizi gene window objesine goturuyor. Javascript e Global Scope imizda en temel objemiz window objesidir.
// Eger biz kendi objelerimizi olusturdugumuzda bu [this] window objesini degil, kendi olusturdugumuz objemizi gosterecek

// daha once obje olusturmustuk

// const emp1 = {
//     name:"Memo",
//     age:32
// }
// const emp2 = {
//     name:"deno",
//     age:23
// }
// console.log(emp1);

// ister isek sonra dan deger atiyabiliyoruz

// const emp1 = {
//     name:"Memo",
//     age:32
// }
// const emp2 = {
//     name:"deno",
//     age:23
// }
// emp1.salary = 12345;
// console.log(emp1);



// // Istersek fonction ekleyebiliriz

// const emp1 = { // Object Literal
//     name:"Memo",
//     age:32,
//     showInfos: function(){
//         console.log("Infos is showing");
//     }
// }
// const emp2 = {
//     name:"deno",
//     age:23
// }
// emp1.salary = 12345;
// emp1.showInfos();
// console.log(emp1);
// // Bu basit anlamda yaptigimiz objeler javascript te Object Literal olarak geciyor




// CONSTRUCTOR FUNCION ile obje olusturma

// Yukaridaki ornekler gibi bircok fonction olusturmak isteyebiliriz. Ve bunu tek tek yazmayacagiz

// ornek

// function Employee(){
//     this.name = "Mehmet";
//     this.salary = 12345;
// }

// const empX = new Employee();
// const emp1 = new Employee();

// console.log(empX);
// console.log(emp1);


// orneklerle costructor func. object

// function Employee (name,age,salary){
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
// }

// const emp1 = new Employee("edward",32,12345);
// const emp2 = new Employee("mehmet",32,54321);
// const emp3 = new Employee("deniz",34,45123);

// console.log(emp1);
// console.log(emp2);
// console.log(emp3);

//-----------------------------------------------------------------------

// function Employee (name,age,salary){
//     this.name = name;
//     this.age = age;
//     this.salary = salary;

//     console.log(this); // Sadece bu object i gosterecek, window object i degil 
// }

// const emp1 = new Employee("edward",32,12345);
// const emp2 = new Employee("mehmet",32,54321);
// const emp3 = new Employee("deniz",34,45123);

//------------------------------------------------------------------------------

function Employee (name,age,salary){
    this.name = name;
    this.age = age;
    this.salary = salary;

    this.showInfos = function(){
        console.log(this.name,this.age,this.salary);
    }
}

const emp1 = new Employee("edward",32,12345);
const emp2 = new Employee("mehmet",32,54321);
const emp3 = new Employee("deniz",34,45123);


emp1.showInfos();
emp2.showInfos();
emp3.showInfos();