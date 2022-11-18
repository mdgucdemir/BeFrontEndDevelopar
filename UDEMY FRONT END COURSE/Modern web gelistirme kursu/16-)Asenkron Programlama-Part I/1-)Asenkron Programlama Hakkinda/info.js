// senkron ve asenkron programlama vardir

// senkron programlamda islemler bir siraya gore isler, biri bittiginde digeri baslar

/* Ornegin

function1();
function2();
function3();
function4();

--Senkron programlamada ilk once function1 baslar ve biter, sonra function2 baslar ve biter sonra function3 ve sonra da function4 ve boyle giderek devam eder
--Ama bu totalde cok zaman alan birseydir, ornegin function4 acil kullanilmasi istenen bir function olsun, biz function4 un kullanmak icin  
function1,function2 ve function3 calisip bitmesini bekleyecegiz, ya bunlar uzun zaman alan islemler ise, 

*/

// Asenkron programlama; senkron programlamamnin tam zittidir, siraya gore calismaz, bu yuzden hizlidir

/* 

Asenkron Yapilar

1-Ajax
2-Fetch
3-Node.js

*/

/*

Asenkron islemlerin yonetimi

1-)Callback(ES6 Oncesi) Hala kullanilir
2-)ES6 Promise
3-)Async & Await

*/

// Ajax & JSON

// --JSON (JavaScript Object Notation) javascript obje gosterimi

/*

--Ajax--

Asynchronous javascript and XML(Extensible Markup Language (Genisletilebilir Isaretleme Dili))
veri alma veri gonderme asynchronous(asenkron) olarak yapar
sayfa yenilenmeden asenkron veri alir
arka planda asenkron islemler
XHR objesi (xmlHttpRequest)
JSON & XML

*/

// XHR javascript ile sunulmus bir API (Application Programming Interface) dir. Web sitesinin es zamanli olarak arka planda calisan olaylari takip eder, islemlci tarafindan calistirilir.