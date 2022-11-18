//-------------- API (Application Programming Interface) Nedir ? ---------------

/*
API lar; bir uygulamanin bir takim function larinin baska uygulamalar tarafindan kullanilmasini saglayan arayuzdur
Ara bir katmandir diyebiliriz
for example: Github API
API ler gelistiriciler tarafindan yazildikleri icin yapilari degisebilir, ogrenmek icin documentation larina bakmamiz gerekir
*/ 

// Request and Response (Istek ve Cevap)


//--------------- Rest (Representational State Transfer) API Nedir ? -----------

// Rest API ise web application lar arasinda iletisim saglamak icin kullandigimiz bir api turu. Bu api turu ( (rest) mimarisini) kullaniyor.
// rest mimarisinin haricinde birde (soap) mimariside var. Arastira bilirisin
// Rest mimarisinin acilimi ( Representational(temsili) State Transfer ) dir.
// Rest in advantage i oldukca hizli olmasidir, hizli bir sekilde (request) yapip hizli bir sekilde (response) alabiliyoruz

/*
 Rest ( stateless ) bir yapiya sahip.
  Yani bir kullanici bir api ye bir request te bulunuyor, bu api rest ile yazilirsa eger bu kullanicinin onceki isteklerini kaydetmiyor,
   yani kullanici bir istek yapiyorsa rest sadece bunu donuyor, bu sekilde oldugu icin hizli calisiyor
*/

// genelde rest api lere Http request lerinde bulunuyoruz 
// rest api yaptigimiz request ler dogrultusunda genellikle JSON object i dondurecek


//------------------- HTTP Istekleri -------------------------------------------

/*

GET = Endpoint(Url) e gore belli bir verileri alir
POST = Endpoint(Url) e gore belli bir verileri gonderir
PUT = Endpoint(Url) e gore belli bir veriyi gunceller
DELETE = Endpoint(Url) e gore belli bir veriyi siler
 
*/