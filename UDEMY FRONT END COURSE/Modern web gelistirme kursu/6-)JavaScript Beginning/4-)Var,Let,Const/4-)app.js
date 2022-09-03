/* javascript in 2015 den sonra gelen yeni standartlari sayesinde yani [ ECMAscript 6 (ES6) ] sayesinde biz degiskenlerimizi;
 hem [ let ] hem de [ const ] anahtar kelimeleri ile bir degiskeni tanimlayabiliriz */

// bunlarin belirli farklari mevcuttur.


                                             /* VAR */

var a;

a = 12;
a = 13;

console.log(a);

// var da asagidaki ornekte oldugu gibi bir degiskeni tanimliyoruz
// sonra tanimladigimiz degiskeni tekrar dan tanimliya biliryoruz


var name = "mehmet deniz"; // ilk tanimlamada [mehmet deniz]

var name = "edward"; // son tanimlamada artik [name] [mehmet deniz] olmaktan cikti, yeni ve farkli bir deger aldi oda [edward] oldu
console.log(name);


 // [var] anahtar kelimesinde degisken atadigimiz bir yere yeni bir degisken tayabiliyoruz ve atadigimiz yeni degisken bizim yeni kalici degiskeniz oluyor
 //[mehmet deniz] [edward ] orneginde oldugu gibi


                                        /* LET */

 let name1 = "mehmet deniz";
 console.log(name1);

 name1 = "edward";
 console.log(name1);

 // [LET] de ise [var] dan farkli olarak degisiklik yapilan bir degiskenin [ilk] ve [son] degerini gosterir. [mehmet deniz] ide gosterir [edward] ti da gosterir.


//  let b = 10;
//  let b = 20;

 // [let] te ornekte oldugu gibi bir degiskeni birden var da oldugu gibi tekrar tekrar tanimlayamazsin [SyntaxError] verir. ama yikardi daki gibi bir atama yapilabilir


                                      /* CONST */

 // [const] kelimesi ingilizceden [constant] tan gelir. manasi [sabit] demektir. Isminden de birseyleri anlatiyor zaten :)

 // bir degiskeni [const] ile verdigimiz zaman baska bir yede degistiremiyoruz.

 const name2 = "mehmet deniz";
 console.log(name2);

// gorulecegi uzere boyle tekrar dan bir tanimlama yaparsak eger [TypeError] aliriz.

//  name2 = "edward";
//  console.log(name2);


// ya da


// const k;
// k = 15;
// console.log(k);

// boyle bir yazim seklinde de [SyntaxError] aliriz, cunku ilk zaten [k] yi undefined olarak tanimlama yaptik sonra deger vermeye calistik.
// Bu arada undefined tanimlamayi kabul etmedi 


// bu ornek javascript is mulakatlarinda sikca sorulan bir soru

const i = [1,2,3,4,5];
console.log(i);
i.push(6);
console.log(i);

// biz burada [i] nin referans ettigi yeri degistirmiyoruz, sadece [i] nin referans ettigi yerin degerini degistiriyoruz.

// javascript gelistiricileri artik [var] kullanmiyorlar [let] ve [const] kullaniyorlar.