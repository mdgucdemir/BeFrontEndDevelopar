
// ES6 Sets

// Set ler, bir degeri sadece bir kere tasima ozelligi vardir, birden fazla deger tasimaz.
// Yani 2 tane "1" degeri ya da 2 tane "mehmet" degeri olamaz.

const myset = new Set();

// set e tek tek deger ekleme

myset.add(100);
myset.add(100);
myset.add(3.14);
myset.add("mehmet");
myset.add(true);
myset.add([1,2,3,4]);
myset.add({a:1,b:2});

// yada set e ilk olustururkende deger ekleyebiliriz. Bu nu Array olarak yapabiliriz

const myset2 = new Set([100,3.13,"mehmet",{a:1,b:2},true,[23,43,17]]);

// console.log(myset);
// console.log(myset2);


// SIZE (kac elemani oldugunu gorme)

// console.log(myset.size);


// DELETE Metodu

// bu metod ta yazdigimiz deger var ise o degeri siler, o deger yok ise silmez
// myset.delete("mehmet");
// console.log(myset);


// HAS Metodu

// // Deger sorgulamamiza yarar. Verdigimiz bu deger Burada var mi? sorusunu sormamiza yarar
// // Sayet deger var ise [true] yok ise [false] degeri yani [boolean] degeri verir 
// console.log(myset.has("mehmet"));
// console.log(myset.has(true));
// console.log(myset.has(78));
// // Eger bir reference degerini bu sekilde tanimlar boyle sorgular isek; alicagimiz yanit [FALSE] olur.
// console.log(myset.has([1,2,3,4]));
// // Reference verileri nasil sogulama yapacagimizi bir once ki calismada inceledik


// ForEach ile gezinme

// myset.forEach(function(value){
//     console.log(value);
// });


// For of ile gezinme 

// for (value of myset){
//     console.log(value);
// }



// Set lerden Array olusturma

const array = Array.from(myset);
console.log(array);