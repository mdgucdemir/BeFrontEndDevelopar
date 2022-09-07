
//          [scope (kapsam)] kavrami
// scope kavrami birdegiskenin nerelerde var olabildigini bize soyler

// bir degisken fonction icinde tanimlanmis ise disarida var olur mu? 
// veya bir block icinde ornegin {if} blogu icinde tanimlanmis ise disarida var olur mu?
// javascript te bizim 3 farkli scope kavrami bulunuyor
// [1. global scope], [2.function scope], [3.block scope]  

// [global scope] herhangi bir fonction icinde olmayan, herhangi bir if durumun icinde olmayan scope umuz

// [function scope]

// function a(){
//     // function scope
// }


// if(i==2){
//     // block scope 
// }


// var value1 = 10;
// let value2 = 20;
// const value3 = 30;

// function func(){
//     var value1 = 40;
//     let value2 = 50;
//     const value3 = 60;

//     console.log(value1,value2,value3,);

//     // function block icinde tanimlama yaptigimiz icin ayni degisken isimleri kullanmaiza izin verdi
//     // cunku bunlar sadece function block unun degiskenleri. Function sona erdiginde onlarda sona erer
// }
// func();


// console.log(value1,value2,value3);



// block scope

// [block scope] if, while, for, blocklari olabilir

// if (true){
//     var a = 10;
//     let b = 20;
//     const c = 30;
     
//     console.log(a,b,c);
// }
// console.log(a);
// console.log(b);
// console.log(c);

// [var] ile [let ve const] arasinda ki fark yukarida ki ornekte belirgin bir sekilde gozukuyor
// [var] disari var olurken [let ve const] disarida var olamazlar
// [let ve const] [if] block unun icerisinde tanimlanmislar ve onlari disari isleme sokamazsin 


var value1 = 10;
let value2 = 20;
const value3 = 30;


if (true){
    var value1 = 40;
    let value2 = 50;
    const value3 = 60;

    console.log(value1,value2,value3);
}

console.log(value1,value2,value3);

// ornek te goruldugu uzer, [block scope] ile de ayni degisken isimleri kullanilarak [let ve const] ile degisken atanabilir
// dikkat ederseniz [var] yapisi geregi her yerde calisir bu da onun dezavantaji. Ilk atamsi {10} idi son atamasi ise {40}, ve son atamyai baz aldi degeri artik {40} oldu
// bu da onun sonu oldu :)). Eger Degismesini istemedigimiz bir degiskeni tanimlar iken [let] ya da [const] kullanmaliyiz
// cuknku [var] bizi hataya goturmede sansi cok yuksek. Bu rusk alinmaz...