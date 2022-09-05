

/* Karsilastirma Operatorleri */

// ==   [esit-esit] operatoru, iki degerin esitligini kontrol eder. iki deger esit ise sonuc [true] degilse [false] olur
// ===  [degerler esit mi, type ler esti mi?] estilik kontrol edolen durumlarda bu daha [guvenli] olanidir.
// !=   [esit degil mi] esit degil ise (true) esit ise (false)
// !==  [edegerler ve type ler (esit degil mi)] esit degilse (true) esit ise (false)
// >    [buyuktur]
// <    [kucuktur]
// >=   [buyuk esit]
// <=   [kucuk esit]


// console.log(2 == 2);
// console.log("js" == "java");

// bir degeri string oldugu icin digerini de string kobul eder ve sonuc [true] olur.

// console.log(2 == "2");

// burda [ degerler ayni mi? ] , [ type ler ayni mi? ] cevap evet ise [ true ] degilse [ false ]

// console.log(2 === "2"); 

// buyuk- kucuk

// console.log(4 > 2);
// console.log(4 < 8);


// esit degil mi? esit degilse [true] esit ise [false] verir

// console.log(2 != 4);

//degerler ve type ler [esit degil mi]

// console.log(2 !== 4);

// [buyuk esit]

// console.log(4 >= 2);
// console.log(4 >= 4);

//[kucuk esit]

// console.log(4 <= 6);
// console.log(4 <= 4);


/* Mantiksal Baglaclar */

// mantiksal baglaclar birden cok kosulu kontrol ettigimiz zaman kullanilan baglaclar

// Not operatoru [!]

// bir degeri [true] ise [false] a - [false] ise [true] cevirir

// console.log(!(2 == 2));
// console.log(!(2 != 2));

// And Operatoru [ && ]

// And operatoru ile [true] cikmasini istiyorsan,karsilastirilan her kosulun kendi icerisinde [true] olmak zorunda
// en az 1 kosulun [false] olmasi durumunda sonuc [false] cikar.

// console.log((2 == 2) && ("ahmet" == "ahmet"));

// Or operatoru [ || ]

// Or da [true] sonucunu istiyor isen, en az bir kosulun [true] olmasi lazim
// or da [false] sonu istiyorsan, butun kosullarin [false] olmasi lazim.

// console.log((4 == 2) || ("ahmet" == "ahmet"));


/* KOSULLU DURUMLAR [if], [else if], [else] */

// if kosulu

// [if] kendi icerisinde ki kosullu durumlar [true] ise kendi blokunu calistirir, degilse calistirmaz 

// if (kosul) {
//     // if block
// }


// const error = true;

// if(error == true) {
//     console.log("error time baby :))")
// }

// if blogu calismaz ise javascript in yukarudan-asagi calisma metodu geregi if block atlanilacak ve asagidaki kodlar calisacak 

// const error = true;

// if(error == false) {
//     console.log("error time baby :))")
// }

// console.log("if calismadi ve asagidaki koddasiniz :P")

// if block calis ve asagi iner asagi daki kod ta calisir

// const error = true;

// if(error == true) {
//     console.log("error time baby :))")
// }

// console.log("if calisti ve asagidaki kod da calisti. Ben asagidaki kodum ;)")

// else block 

// else block if block calismaz ise calisir

// const error = true;

// if(error == false) {
//     console.log("error time baby :))")
// }
// else {
//     console.log("if block calismadi else block calisti. Ben else block ;)")
// }


// const user = "mmc";

// if (user === "mmc") {
//     console.log("if block calisti")
// }
// else {
//     console.log("else block calisti")
// }

// else if 

// birden cok kosul yazmak ister isek [else if] kosulunu kullaniriz.

// const process = "2";

// if (process === "1") {
//     console.log("process 1")
// }
// else if (process === "2") {
//     console.log("process 2")
// }
// else if (process === "3") {
//     console.log("process 3")
// }
// else if (process === "4") {
//     console.log("process 4")
// }
// else {
//     console.log("no process")
// }


// const number = 100;

// if (number === 100) {
//     console.log("sayi 100")
// }
// else {
//     console.log("sayi 100 degil")
// }

// Ternary Operator [ ise(?) degilse(:)]

// eger biz if kosullarinda de tek bir islem yaptiriyor isek (console.log) gibi bunu [Ternary operotoru] ile yapabiliriz

// const number = 100;

// console.log(number === 100 ? "sayi 100" : "sayi 100 degil" );


// eger biz [if] de tek bir islem yapiyor isek suslu parantezler {} kullanmak zorunda degiliz, yan yana da yazabiliriz

const number = 100;

if (number ===100) console.log("sayi 100");
else console.log("sayi 100 degil");

