

let value;

// icinde bulundugum zamani gosteren bir obje olusturalim

const now = new Date(); // parantez icine herhangi birsey gondermedigimiz icin suan ki zamani gostercek

// console.log(now);

const date1 = new Date("8-30-1990"); // dogum tarihimi olusturdum :))

const date2 = new Date("August 30 1990");
const date3 = new Date("8/30/1990 02:36:28");

value = date3;

// belirli metodlar uygulama

value = date1.getMonth(); // kacinci ay oldugu gosterir, not = aylar 0 (sifir) dan baslattigi icin normalde 8. ayi 7 diye yazar
value = date2.getDate(); // kacinci gun oldugunu soyler ve 1 den baslar
value = date3.getDay(); // pazar i (0) olarak alir, pazartesi (1) dir. Ben persembe gunu dogmusum :))

value = date3.getHours();
value = date3.getMinutes();
value = date3.getSeconds();
value = date3.getMilliseconds();


// objenin degerlerini degistirme

date1.setMonth(9);
date1.setDate(29);
date1.setFullYear(1989);
date1.setHours(0);  // gece 12
date1.setMinutes(29);
date1.setSeconds(35);

value = date1;

console.log(value);