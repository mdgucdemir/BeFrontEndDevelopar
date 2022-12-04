
// async ve await icin [https://javascript.info/] sitesine bakabilirsin

// async & await ler ile Promise leri daha kolay ve efektif kullanabiliyoruz


// ------------------------------ ASYNC --------------------------------------------------

// Async ile yalmis bir function mutlaka bir Promise dondurmek zorunda, biz yapmaz isek kendisi otamatik olarak promise icerisine alip,donduruyor

// //-----------------------

// function test(data){
//     return data;
// }
// console.log(test("hello world"));

// //-----------------------



//-------------------------

// async function test (zata){
//     // async anahtar kelimesi bir function da mutlaka bir Promise donucegini gosterir
//     // (return new Promise() ) yapisini soyluyor

//     return zata; // js otomatik olarak buradaki (zata) yi Promise deki (resolve) koyuyor
// }
// // console.log(test("hello there"));
// test("hello there").then(response => console.log(response));

// // ------------------------


// ---------------------------------------- AWAIT -----------------------------------------------------

// await async olan bir function icerisinde calisir. async olmayan bir function icerisinde calismaz

// await anahtar kelimesi ise bir Promise i (resolve) etmesi yani olumlu donus yapmasini bekleyen bir anahtar kelimedir


// // ----------------------------------------------------------------------------------------
// async function test(mata){
//     let promise = new Promise((resolve,reject)=>
//     {
//         // await bir tane promise in resolve etmesini bekler, bu ornekte bizim promise imiz 2sn sonra resolve edicek
//         // await kodun bu kisminda bekleyecek ve altindaki kodlari calistirmayacak
//         setTimeout(() => {
            
//             resolve("bu bir degerdir");
//         }, 2000);
//     })

//     let response = await promise; // bu satir 2sn bekleyecek

//     // // 2sn sonra ("bu bir degerdir") ismi yukarida (let) ile esitledigimiz (response) kismina gelicek 
//     // console.log(response);

//     // // test etmek icin
//     // console.log("durdu mu? durdu mu? code burada durdu mu? :D");

//     return promise;
// }

// test("hello there").then(response =>console.log(response));
// //----------------------------------------------------------------------------------------------



// // --------------------------------------------------------------------------------------------

// async function test(data){
//     let promise = new Promise((resolve,reject)=>{

//         setTimeout(() => {
            
//             if(typeof data === "string"){
//                 resolve(data);
//             }
//             else{
//                 reject(new Error("Lutfen String bir deger giriniz"));
//             }
//         }, 5000);
//     });

//     const response = await promise; // 5sn bekleme
//     return response;
// }

// test("fosik").then(data => console.log(data)).catch(err => console.error(err));

// //---------------------------------------------------------------------------------------------



// -----------------------------------------------------------------------------------------------

// async ve await lerin en guzel kullanim alani fetch function ile beraber kullanimidir
// fecth function promise donduryor ve biz bu promise i await ile bekleyebiliriz

async function getCurrency(url){
    // fecth bize promise dondurdugu icin await kullanabiliriz
    const response = await fetch(url); // response object 

    // response.json bize bir promise dondurdugu icin await kullanabiliriz
    const data = await response.json(); // json object

    // console.log(data);
    return data;

}
getCurrency("https://open.er-api.com/v6/latest/USD").then(usd => console.log(usd));


//------------------------------------------------------------------------------------------------