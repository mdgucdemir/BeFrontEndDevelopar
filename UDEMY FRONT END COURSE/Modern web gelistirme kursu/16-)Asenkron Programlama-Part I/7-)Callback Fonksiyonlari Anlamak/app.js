
//------------------------- CALLBACK FUNCTIONS ----------------------------------

// (callback) aslinda bir function, biz bu functionlari baska bir function a parametre olarak gonderiyoruz

// Callback function lar ile (asenkron) islemlerimizi yonete biliyoruz

// //-----------------------------------------

// const langs = ["python","java","c++"];

// // langs object inin elemanlerini tek tek yazmak icin forEach metodu ile ayri bir fonction ile object elemanlarin uzerinde geziniyor ve console yazdiriyor idik
// langs.forEach(function(lang){
//     // burada ki function i aslinda biz parametre olarak gonderdik
//     console.log(lang);
// });

// // --------------------------------------------


// // ------- diger bir ornek ile ----------------

// document.getElementById("btn").addEventListener("click",function(){

//     // addEventListener daki function aslinda bir (callback function) dir
//     console.log("buradaki function callback function dir.");
// });

// // -----------------------------------------------


// Asenkron islemlerimizi (callback) sayesinde yonete biliriz

//---------- Daha once gordugumuz (setTimeout) lara callback leri gonderebiliyoruz --------

// function process1(){
//     console.log("process 1");
// }

// function process2(){
//     console.log("process 2");
// }

// // yukaridaki ornekte her iki function da senkron bir sekilde calisti

// function process1(){
//     setTimeout(() => {
//         console.log("process 1");
//     }, 3000);
// }

// function process2(){
//     console.log("process 2");
// }

// // bu ornekte ise setTimeout sayesinde ilk once (process 2) 3 sn sonra ise (process 1) [ASENKRON] olarak calisti, birbirini blocklamadilar
// // iste bunlar javascript e ki asynchronous (asenkron) islemlerimiz



// process1();
// process2();

// // ------- Peki yukaridaki ornegi baz alarak ilk once process 1 daha son daha sonra ise process 2 yi calistirmak istiyor isek --------------

// function process1(callback){ // istersek buraya (fosik)te yazabiliriz ama genel hali ya (callback) yada (cb) dir. 
//     setTimeout(() => {
//         console.log("process 1");
//         // process 2 yi process 1 den sonra calismasini istedigimiz icin callback function yazilir
//         callback();
//     }, 3000);
// }

// function process2(){
//     setTimeout(() => {

//         console.log("process 2");
//     }, 2000);
// }

// process1(process2);

// // -------------------------------------------------------------------------------------------------------------------------------------------------

// ----------------------------------------------- bir baska ornek ise --------------------------------------------------------------------------------

const langs = ["java","python","c++"];

// function addLang(lang){
//     setTimeout(() => {
//         langs.push(lang);
//         console.log("eklendi");
//     }, 2000);
// }

// function getAllLangs(){
//     setTimeout(() => {
//         langs.forEach(function(lang){
//             console.log(lang)
//         });
//     }, 1000);
// }

// bu ornekte 'javacript' langs object ine eklendi ama console da yazildigini goremekdik cunki islem (asynchronous) olarak devam etti 
// duzeltmek gerekir ise

function addLang(lang,callback){
    setTimeout(() => {
        langs.push(lang);
        console.log("eklendi");
        callback();
    }, 2000);
}

function getAllLangs(){
    setTimeout(() => {
        langs.forEach(function(lang){
            console.log(lang)
        });
    }, 1000);
}

addLang("javascript",getAllLangs);




