
// element secmenin bircok yontemi vardir.

// elementi [id] ye gore secme

let element;

element = document.getElementById("todo-form");
element = document.getElementById("tasks-title");

// [class] ismine gore element secimi

element = document.getElementsByClassName("list-group-item");
element = document.getElementsByClassName("list-group-item")[1]; // 2. list group elemani sectik

element = document.getElementsByClassName("card-header");


// element [tag] e gore (etiket ismine gore) secme

element = document.getElementsByTagName("li");
element = document.getElementsByTagName("div");

// Query selector 
// biz burada 3 farkli secim yontemi yaptik, [Query] hepsini bir kere de secme imkani sagliyor 
// [query] ilk gordugu elemani secer, Ornegin biz [li] leri secersek 4 tane [li] arasindan ilk [li] yi secer. Tek bir Element secer
// Css de kullandigimiz [selector] u kullanlanabiliriz

element = document.querySelector("#todo-form");
element = document.querySelector("#tasks-title");  // buldugu ilk tasks-title class ini getirdi

element = document.querySelector(".list-group-item"); // buldugu ilk class i getirdi
element = document.querySelector("li");  // ilk li

element = document.querySelector("div");  // buldugu ilk class i getirdi

// hepsini secmek istersek eger [query selector all] i kullanmaliyiz

element = document.querySelectorAll(".list-group-item");  // butun li leri getirdi
// [NodeList] seklinde siraladi [li] leri, bu yapi [array] lere daha cok benzedigi icin biz istersek [forEach] ile elemanlar uzerinde gezebiliriz 

element.forEach(function(el){
    console.log(el);
});


// console.log(element);

// biz bu element leri sectikten sonra, elementlerin ozelliklerini degistire biliriz, style verebiliriz