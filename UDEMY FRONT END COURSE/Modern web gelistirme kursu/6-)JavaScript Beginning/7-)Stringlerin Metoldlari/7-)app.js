let value;

const firstname = "M. Deniz";
const lastname = "Gucdemir";
const langs = "Javascript,html,css,react";

value = firstname + " " + lastname;  // [ + " " + ] bosluk birak anlamina gelir

// ya da

value = "M. Deniz "
value = value + "Gucdemir"

// veya

value += "Gucdemir"  // value = value + "Gucdemir" manasina gelir

// bir value nin kactane karakterden olustunu ogrenmek isterir bunun icin

value = firstname.length; // firstname de bosluk dahil olmak uzere 8 adet karakter varmis mesela

//concatenation (birbirine baglama)

value = firstname.concat(" ",lastname," ","Rock'n'roll");

//lower case

value = firstname.toLowerCase();

//upper case

value = lastname.toUpperCase();

value = firstname[0]; // firstname de ki 0. index te ki elemani getir oda [M]
value = firstname[1]; // nokta [.]
value = firstname[2]; // bosluk [ " " ]
value = firstname[3];
value = firstname.length;

value = firstname[firstname.length - 1]; // biz bunu boyutunu bilmedigimiz bir string in son karakterini almada kullanabiliriz.

// index of

value = firstname.indexOf("M");   // firstname deki [M] nin kacinci [index] de oldugunu ogrenmek icin, ( Not= Buyuk-kucuk harf yazimi dikkate alinmali ben kucuk [m] yaptim (-1) gosterdi  ) 
value = firstname.indexOf("m");  // kucuk (m) firtsname de olmadigi icin -1 ciktis


//Char At
value = firstname.charAt(0);  // firstname de ki 0. index teki karakteri gosteririr
value = firstname.charAt(firstname.length - 1);

//Split

// Split metodu cok onemli
// eger sizin bir dosyanizda virgul (,) ile ayirilmis elemanlariniz var ise bunlari tek tek almamizi saglar.

value = langs.split(",");

// split (bolmek), Neye gore bolmek istedigimizi parantezin () icinde belirtiyoruz, biz virgul (,) gore istedik onun icin cift tirnak icinde belirttik, cift tirnak olmaz ise patlarsin ,denedim ve patladim ;)
// split islemini yapti ve her bir elemanimiz alip bir tane [Array (diz)] e yerlestirecek. 

//Replace

// string in icerisinde belirli bir yeri degistirmek istersek [ replace ] kulanabiliriz.

value = langs.replace("react","vue");


// Includes

// ornegin lengs in icinde belirli alanlari sorgulamak istiyoruz, mesala langs in icerisinde (javascript) var mi? 
// var ise [true] yazicak yok ise [false] yazicak

value = langs.includes("Javascript"); // var ve true gosterdi, Not = buyuk-kucuk harf onemli ben kucuk harf ile yazdim ve [false] gosterdi
value = langs.includes("javascript"); // (j) yi kucuk yazdigim icin [ false ] gosterdi


console.log(value);


