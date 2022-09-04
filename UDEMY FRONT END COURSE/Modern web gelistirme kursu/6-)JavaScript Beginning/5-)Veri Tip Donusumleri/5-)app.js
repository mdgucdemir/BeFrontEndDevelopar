// biz bir programlamada bekirli veri tiplerini birbirine donusturmek isteyebiliriz.
// ornegin bir [number] bir [string] e donusturmek istenebilir 



let value;

// Veri tiplerini [String] e cevirme

value = String(123); // number i string e cevirdik
value = String(3.14);
value = String(true); // boolean i string e cevirdik
value = String(false);
value = String(function() {console.log()}); //bir function i string e cevirdik
value = String([1,2,3]);

// bir baska yol olarak ta;

value = (10).toString();
value = (false).toString(); // boyle de yapabiliriz




// Veri tiplerini [number] a cevirme

// veri tiolerini number a cevirme biraz kistli
// bir veri tipi number a cevrilemiyor ise [NaN] {not a number(bir sayi degil)} sonucu alacagiz



value = Number("123");
value = Number(null); // null bos bir deger oldugu icin [0] degerini gosterir
value = Number(undefined); // sayisal bir degeri olmadigi icin NaN (not a number) sonucunu goruruz
value = Number("hello world"); // sayisal bir degeri olmadigi icin NaN sonucu aliriz
value = Number(function(){console.log()}); //boyle bir function i bir sayiya ceviremeyiz o yuzden NaN sonucu aliriz
value = Number([1,2,3,4]); // bir array i number a ceviremedigimiz icin NaN sonucu aldik
value = Number(false);
value = Number(true);


// aslinda [string] lerin icerisinde [number] var ise ve onlari cevirebiliriz
// [null] i number a cevirebiliriz (degeri 0)
//[boolean] olan [true,false] cwvirebiliriz [false(0), true(1)]

value = Number(3.14);

 // bir baska yol ise

 value = parseFloat(3.14); // parse ing ayristir|| float ondalikli sayi
 value = parseInt(3); // int ise bildigin (Integer)
 
 console.log(value);
 console.log(typeof value);




// Auto cevirme

// const a = "hello" + 34;        // burada her ikisini de string olarak auto olarak donusturdu ve hello34 olarak yazdi
// const a = "hello" + "24";     // yukardaki ornegin laciverdi :)
// const a = "34" + 24;         // burada da auto olarak string e cevirdi 3424 olarak yazdirdi 
const a = Number(34) + 24;     // burada ise number olarak ozellikle bir tanimlama yaptik 34 e ve 34+28 olarak islem yapti 58 sonucunu verdi


console.log(a);
console.log(typeof a);



