// setTimeout & setInterval window object in metodlari

// console.log(this);

//------------- Set Timeout -------------

// Set Timeout fonksiyonu ile belli bir islemi belli bir saniye sonra baslatabiliyoruz
// Kullanimi

// setTimeout(() => {
//     console.log("naber")
// }, 2000);



//------------ Set Interval -------------

// setInterval belirli bir islemi belirli bir saniye araliklar ile icerisinde ki function i tekrar-tekrar calistirir
// setTimeout ile arasindaki en buyuk fark budur

let i = 0;

let value = setInterval(() => {
    i++;
    console.log("Number: ",i);
    
}, 1000);

// bu function i durdurmak icin ise ( Clear Interval ) function u kullancagiz

document.getElementById("btn").addEventListener("click",function(){
    clearInterval(value);
});