
// belir bir islem yapacak kodumuz var ise bunu bir [fonction] catisi altinda yazariz 
// ihtiyacimiz oldukca o function i cagiririz
// boylece durmadan ayni kodu durmadan yazma yada copy-paste yaparak [spacetti code] durumundan kurtaririz.

// function tanimlama

// function hello(){ 
//     // su anda ekranda herhangi birsey yazmiyor biz sadece function tanimlama yaptik
//     console.log("hello world");
// }

// funcion i csgirmak istiyor isek

// hello(); // this is function call

// function i istedigim kadar kullanabilirim

// hello();
// hello();
// hello();
// hello();

// function hello (name, age){
//     console.log(`your name: ${name} \nyour age: ${age}`);
// }

// biz function nin icine parametre gondere biliriz

// hello("m. deniz",32);
// hello("edward",32);

// icine parametre gondermedigimiz icin [undefined] oldu
// hello();


// function mello (name, age){
//     if(typeof name === "undefined") name = "no name";

//     if(typeof age === "undefined") age = "no age";
 
//     console.log(`your name: ${name} \nyour age: ${age}`);
// }
// mello();

// // kisa yol direk default olarak atamak
// function cello (name = "no name", age = "no age"){
    
//     console.log(`your name: ${name} \nyour age: ${age}`);
// }

// cello();
// cello("joe");


// fonksiyonlar da [return]
// fonsiyonlarin cikisinda deger cikmiyor ve biz o degeri baska bir fonksiyonda kullanmak istedigimiz de NaN ciktisi oliyoruz
// fonksiyonlarda [deger] donmesini istiyor isek, ki bu fonksiyondan deger ciktisi almaktir, [return] kulanicaz 
// [return] bir fonksiyonu sonlandirir. return nun altina yazdiklarimiz calismanz

// function square (x){
//     return x * x;
// }
// function cube(x){
//     return x * x * x;
//     console.log("what's up"); // hic calistirilmadi
// }


// // let a = square(12);

// // a = cube(a);

// let a = cube(square(12));

// console.log(a);

// function hello(){
//     return "hello world"
// }
// console.log(hello());



// function Expression

// biz burda bir fonksiyonumuzu bir degere esitledik
// const hello = function(name){
//     console.log("hello world" +" "+ name);
// };

// hello("m. deniz");



// Immediatly Invoked Function Expression (IIFE)


// turkce meali [tanimlandigi yerde calisan fonksiyonlar]


// (function(name){
//     console.log("hello world " + name );
// })("edward");

// bir objenin icinde function far ise biz buna [metod] diyoruz
// objenin disinda var ise function diyoruz.


const database = {
    host: "localhost",
    add: function(){
        console.log("added");
    },
    get: function(){
        console.log("get is done :)");
    },
    update: function(id){
        console.log(`id: ${id} updated`);

    },
    delete: function(id){
        console.log(`id: ${id} deleted`);

    }
}
console.log(database.host);
database.add();
database.delete(10);
database.update("edward");