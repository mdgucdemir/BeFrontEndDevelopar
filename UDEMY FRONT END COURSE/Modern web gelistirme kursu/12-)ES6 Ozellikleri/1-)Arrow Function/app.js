// const hello = function(){
//     console.log("hello world");
// }

// hello();

// ES6 ile birlikte [Arrow function] hayatimiza girdi ve biz bu function ile yukarda ki gibi bir function i biraz daha kisa bir sekilde yazabiliyoruz



// [ARROW FUNCTION] ile yazim

// const hello = () => {
//     console.log("hello");

// }

// hello();

// goruldugu uzere tanimlama yaparken herhangi bir [function] ibaresi yok ve [arrow (=>)] kullandik


// PARAMETRE GONDERME

// const hello = (firstName,lastName) => {
//     // iki parametre birden yazdik
//     console.log("hello",firstName,lastName);
// }

// hello("Edward","Gucdemir");  // function icine parametre gonderdik


// eger tek parametre yazicak isek parantezleri () yazmak zorunda degiliz 

// const hello = firstName => {
//     console.log("hello",firstName);
// }

// hello("edward");


// eger function hic parametre almiyor ise mutlaka parantez () kullanmalisiniz. Yoksa function oldugunu anlamaz 


// eger function tek bir islem yapiyor ise suslu parabtez {} kullanmaniza da gerek yok

// const hello = firstName => console.log("hello",firstName);
// hello("edward");

// iki parametre gonderelim

// const hello = (firstName,lastName) => console.log("hello",firstName,lastName);
// hello("edward","m.d. gucdemir");




// ornekler

// cube 

// const cube = function(x){
//     return x*x*x;
// }
// console.log(cube(4));

// arrow function ile cube function yazimi

// const cube = x => {
//     return x*x*x;
// }
// console.log(cube(4));

// bunu daha kisa yazabiliriz

// eger bizim function imiz tek bir islem yapiyor ise [return] e ve [suslu parantezlere] gerek yok

const cube = x => x*x*x;
console.log(cube(4));