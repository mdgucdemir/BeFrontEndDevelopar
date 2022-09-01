

// this is only one commend row

/*

this

is

multiple

command

row

*/

// javascrpt te her bir satirimiz(row) noktali virgul ile ( ; ) biter 
// tek tek tum satirlarimiz alt-alta calistirilir

// Variables [var] (Degiskenler)


// var a = 40;
// var b = 30;
// var c = 10;
// console.log(a,b,c);

 // ilerleyen derslerde degiskenler [let & const] ile tanimalari gosterilecektir ve aralarindaki farklar anlatilacaktir. Ama simdi [var] tanimlamalar yapilacaktir.\

 // [ctrl] + [k] + [c]  commend
 // [ctrl] + [k] + [u]  uncommend


// JAVASCRIPT VERI TIPLERI
// Javascripte iki turlu veri tipi vardir. Bunlar [ Primitive ] ve [ Reference ] veri tipleridir.

//1-) PRIMITIVE VERI TIPLERI

/* Primitive veri tipleri bir; 

. [number] (sayi) olabilir 
. [string] (yazi) olabilir
. [undefined] (tanimsiz) olabilir 
. [boolean] olabilir
. [null] (bos,gecersiz,hukumsuz) olabilir

*/

/* NUMBER */

var a = 10;  //dedigimizde javascript bize dinamik bir tipleme yapiyor. Yani otamatik olarak [a] ya sayi olan [10] atiyor ve artik [a] degiskeninin type i [number] oluyor

// Number v;eri type i ilkel bir veri type mizdir.


//gorelim
console.log(typeof a);
console.log(a);

var b = 3.14; // ondalikli sayi versek dahi bunu bir nuber olarak kabul edecektir
console.log(b);
console.log(typeof b);

/* STRING */

// String metinsel bir ifade
// string ifadeleri yazarken cift tirnak [""] arasina yazariz
// ilkel veri tipimizdir

var name = "memo";
console.log(name);
console.log(typeof name);

/* BOOLEAN */

// Boolean  veri tiplerimiz 2 farkli degere sahiptir. Bunlar; [true] & [false] dir.
// biz bu veri tipimiz kosul durumlarimizda kullanacagiz

var c = true;
console.log(c);
console.log(typeof c);

/* NULL */

//ornekle aciklar isek, asagidaki (q) degerine atanan [null] aslinda hicbir deger tasimadigini, bos bir deger tasidigini gosterir.

var q = null;
console.log(q);
console.log(typeof q); // type [object] olarak gozukuyor ama aslinda object degildir, burada bir hata soz konusu bunu unutma.!!S

/* UNDEFINED */

// tanimsiz anlamina gelir, null ile cok karistirilir. 
// Null ile arasindaki fark; biz [null] e bos deger atadadik ama [undefined] a ise hic bir deger atamadik 

var w;          // goruldugu uzere gicbir deger atanmamistir.
console.log(w);





//2-) REFERENCE VERI TIPLERI



/* .[ARRAY] 
   .[OBJECT] 
   .[DATE] 
   .[DATE OBJECT] 
   .[FUNCION] */

/* ARRAY */

var numbers = [1,2,3,4,5]  //biz buradaki degerlere bir reference uzerinde ulasiyoruz, oreference ise bu oernekte [number] tir
console.log(numbers);
console.log(typeof numbers); //type i object olarak gorunuyor

/* Aslinda butun referans verilerimizin tipi [object] tir. */
console.log(numbers[0]); // burada [numbers] reference uzerinden [0]. index i almaya calisiyoruz. 


/* OBJECT */

//Kendi objectlerimizi olustura biliriz


var person = {

    name: "Edward M. Deniz",
    age: 32
}
console.log(person);
console.log(typeof person);

/* DATE OBJECT */

var date = new Date();
console.log(date);
console.log(typeof date);

/* FUNCTIONS */

var hello = function(){
    console.log("hello world");
}

console.log(hello);
console.log(typeof hello); // type i function gosterdi ama unutma bu bir fonction objesi


/* PRIMITIVE & REFERENCE VERI TIPLERI ARASINDAKI FARKLILIKLAR */

// Primitive veri tipleri sadece o degiskenin degeri
// referans veri tiplerimiz ise referanslar uzerinden bellekte bir yeri gosteriyor ve biz o yeri gosterdikten sonra o degeri alabiliyoruz.

var r = 10;
var t = r;

var r = 15; // bunlar ilkel veri tiplerimiz oldugu icin ilk (r) degeri (10) du sonra (15) yaptik ama (r) ye esit olan (t) hala (10) olmaya devam etti.

console.log(r,t);

// AMA reference ile yaparsak

var y = [1,2,3];

var u = y;

// ve de 

y.push(4); // der yani (y) ye (4) diye yeni bir deger veriyoruz

console.log(u); // (u) nun da degerinin degistigini u=[1,2,3,4] oldugunu gosteriyoruz

