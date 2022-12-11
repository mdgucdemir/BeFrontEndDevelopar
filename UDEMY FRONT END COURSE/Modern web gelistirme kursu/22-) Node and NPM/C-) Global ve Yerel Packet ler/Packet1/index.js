console.log("packet 1");

// dosya secimi icin terminale [ cd (folder name) ] yazmaliyiz
// packet1 in icerisine girip [npm install simple-is] dosyasini yukledigimizde bu [yerel bir packet] oluyor. packet1 folder i disindaki bir yerden kullanamiyoruz

// simple-is packetini kullanmak icin [ " const is = requere("simple-is") " ] yazmamiz gerekuyor

const is = require("simple-is");

console.log(is.number(23));

// her iki folder da ayni modul kullanilacak ise bunu {global module} icerisine alabilir, global module yardimi ile yapabiliriz

/* 

npm in global modullerini gormek icin:
- pc nin [komut istemi] yani (cmd yazip) icerisine girip [ npm root -g ] yazarak,
  pm (Node Package Manager) in (node_modules) lerinin nerede oldugunu ogrenebiliriz

*/

/*
 [global package] ve [local packet] ile ilgili onemli bilgiler 
- eger birden fazla uygulama gelistiricekseniz ve bu uygulamalar ortak package lari kullanicaksa gelistirme ortaminda bunu siz global olarak kullanabilirsiniz
- eger ugulamanizi yayinlayacaksaniz global package kullanmayin, tum package lerinizi local package olarak kullaninin
cunku o sadece sizin pc nizde var olacak server da sizin kullandiginiz global package ler olmayacak.
Ama local (yerel) package kullanirsak; o zaten projenin icerisinde var
*/

/*
global package olarak [simple-is] yi kurmak ister isek;

[npm install -g simple-is] yazmamiz yeterli
*/