 // window object

//  console.log(this);

// yada 

// console.log(window);

// burada document e bakiyoruz ve document in de bir obje oldugunu goruyoruz

let value;

value = document;
value = document.all;
value = document.all.length;
value =document.all[0];
value =document.all[6];
value =document.all[document.all.length - 1];

const elements = document.all; // Html collection diye bir obje donuyor


// for(let i =0; i < elements.length; i++){

//     console.log(elements[i]);
// }

// elements.foreach(functio(elements)){ // typeError aldik. cunku bu bir html collection, html collection lari [foreach] da kullanamiyoruz
//     console.log(elements);
// }

// biz bu foreach i kullanmak icin array lere cevirmemiz gerekiyor 

// const collection = Array.from(document.all);

// collection.forEach(function(collection){
//     console.log(collection);
// });

// body ye erisim

value = document.all[8];
value = document.body;
value = document.head;
value = document.location;
value = document.location.hostname;
value = document.location.port;

value = document.URL;

value = document.characterSet;

console.log(value);

// console.log(value);

// console.log(document);