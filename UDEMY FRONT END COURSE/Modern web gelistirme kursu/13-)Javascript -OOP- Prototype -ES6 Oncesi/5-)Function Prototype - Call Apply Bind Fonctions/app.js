
//                                                      CALL, APPLY & BIND

// Call Apply ve Bind function lari, Function prototype icerisinde bulunan 3 tane function umuz. Ve Biz bunlari bir metod olarak ta kullanabiliriz.

const obj1 = {
    number1:10,
    number2:20
};

const obj2 = {
    number1:30,
    number2:40
}

// function addNumbers (number3,number4){
//     console.log(this.number1 + this.number2 + number3 + number4);
//     // Dikkat edersek yukarida (this) dedik ancak biz buraya herhangi bir objemizi gondermedik, (this.number1 ve this.number2) objesi belli degil
//     // abaca burada ki (this) hangi objemizi gosteriyor
    
//     // peki this.number1 i yadiralim ne olacak
//     console.log(this.number1); 
//     // undefined sonucunu verdi

//     // peki this i yazdiralim 
//     console.log(this);
//      // Window objesini verdi, Window objesinde (number1 ve number2) olmadigi icin "undefined" veriyor, ve biz undefined lari sayilarla toplamaya calisiyoruz
//      // Sonuc haliyle NaN(Not a Number) oluyor

// }

// addNumbers(100,200);
// // Cikti = NaN yani (Not a Number) seklinde bir sonuc verdi


//-------------------------------------- CALL Metodu ------------------------------------------ 

// function addNumbers (number3,number4){
//     console.log(this.number1 + this.number2 + number3 + number4);
// }

// addNumbers.call(obj1,100,200);
// // Yukarida verilen (this) artik (window) objesinin yerine gecmiyecek, (obj1) in yerine gecicek ve sonuc 330 olacak 

// addNumbers.call(obj2,100,200);
// // obj2 icinse sonuc 370

//-------------------------------------- APPLY Metodu ------------------------------------------

// // Apply Metodunda call metodunda tek farkli nokta olarak objenin parametreleri array olarak yazilir 
// // addNumbers.apply(obj1,[100,200]); ornegi gibi

// function addNumbers (number3,number4){
//     console.log(this.number1 + this.number2 + number3 + number4);
// }

// addNumbers.apply(obj1,[100,200]);
// addNumbers.apply(obj2,[100,200]);

//-------------------------------------- BIND Metodu ----------------------------------------------

// Bind yapisi itibari ile call ve apply dan farkli ama yine ayni kapiya cikiyor
// bind function ile bir function i bir objeye bagliyoruz
/* 
   Bind kullanildigi function dan bir tane (kopya function) uretiyor. 
   Ornegin biz obj1 verdiysek bu kopya fonksiyon obj1 e gore calisir
   Bind Fonksiyonun kullanim yerleri genelde Event lerdir. 
   This anahtar kelimesini karistigi yerlerde bind i kullaniyoruz
*/
// bind in call ve apply dan farki kopya fonksiyon uretmesi ve biz bu copy function lari istedigimiz yerde kullaniyoruz

function getNumbersTotal(number3,number4){
    return this.number1 + this.number2 + number3 + number4;
}

const copyFunc1 = getNumbersTotal.bind(obj1);
const copyFunc2 = getNumbersTotal.bind(obj2);

// console.log(copyFunc1);
// console.dir(copyFunc2);

// bu fonksiyonlarin kopyasi oldugu icin biz bunlari istedigimiz yerde ve istedigimiz zaman kullanabiliriz. Bind in apply ve call dan en onemli farki bu

console.log(copyFunc1(100,200));
console.log(copyFunc2(100,200));