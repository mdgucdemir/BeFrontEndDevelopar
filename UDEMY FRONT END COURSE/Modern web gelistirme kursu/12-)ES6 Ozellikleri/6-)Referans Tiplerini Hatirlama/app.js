// Primitive ve Referans veri tiplerini tekrar gozden gecirelim

// Referans veri tipleri [bellekte bir yeri tutan] veri tipidir bunu unutma

// Bu yuzden esitlik, buyukluk, kucukluk gibi karsilastirma yapilirsa herhangi bir sonuck ciktisi alamayiz. 

/*
 Cunku biz referans veri tiplerimizde, onun icerisindeki degerleri karsilastirmiyor bellekteki baslangic noktasini karsilastirmis oluyoruz.  
*/

// Primitive Veri Tipleri

// let a = "mehmet";
// let b = "mehmet";

// if (a === b){
//     console.log("esit");
// }

// Reference Veri Tipleri

// Array Ornegi

// array1 = [1,2,3,4,5,6];
// array2 = [1,2,3,,4,5,6];

// if (array1 === array2){
//     console.log("esit");
//  // referance veri tiplerinde biz esitlik sorgulamasi yaptigimizda, veri tipinin icindeki degerlerine bakmiyor
//  // Bu reference lar Bellekte ayni yeri goster mu? Ona bakiyor
// }

// Primitive de esitlik sorgulamasi yaptigimizda degerlere bakiyor. Reference da ise bellekteki reference yerlerine bakiyor

// Object Ornegi

// const person1 = {
//     name:"mehmet",
//     age:32,
//     salary:12470
// }
// const person2 = {
//     name:"mehmet",
//     age:32,
//     salary:12470
// }

// if (person1 === person2){
//     console.log("esit");
// }
// else {
//     console.log("Ne oluyo Lan");
// }

// Peki Javascript teki olusturdugum [object]lerin icerigini karsilastirabilmem icin herhangi biri fonction yok mu? Hayir YOK. 
// Eger degerleri karsilastirmak istiyorsaniz bunu bizim yazmamiz gerekiyor. Cogu zamanda buna ihtiyac duymuyoruz

// Map Ornegi

// const cities = new Map();

// cities.set("San Francisco",5);
// cities.set("Los Angeles",6);



// // biz map orneginde sehir isimlerini primitive olarak verdik, bu map in icinde degerin primitive olarak tariyor ve buldugunda ina karsilik gelen degeri veriyor

// // Ama referance olarak verirsek ornegin Array olarak verirsek ne olacak  

// cities.set([1,2,3],"Array");

// // console.log(cities.get("San Francisco"));

// console.log(cities.get([1,2,3]));

/* Goruldigu uzere undefined sonucu veriyor. Cunku key olarak verdigimiz array bellekte farkli bir yeri gosteriyor, 
console da yazdirdigimiz array ise farkli bir yeri gosteriyor*/


// bunu engellemek icin array i primitive olarak tanimlamamiz gerekicek

// Ornek olarak 

const cities = new Map();

const key = [1,2,3,4];

cities.set("barzi",1);
cities.set("barzo",12);
cities.set(key,123);

console.log(cities.get(key));

/* referance veri tipi olan array imizi "key" e esitledik ve yine "key" ile sorguladigimiz icin ayni reference noktasina gidiyor, 
tanaimlanan degeri buluyor ve map te karsiligi olan value yi getiriyor */

// Reference veri tipleri bellekte ki yere gore karsilastima yapiyoruz
// Primitive veri tipleri aldiklari degere gore karsilastirma yapiyoruz