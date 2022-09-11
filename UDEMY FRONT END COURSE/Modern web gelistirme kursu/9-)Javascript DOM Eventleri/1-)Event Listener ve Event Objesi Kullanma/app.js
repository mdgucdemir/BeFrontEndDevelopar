
// javascript te elementlerimize [event (etkinlik,olay)] kazandirmayi gorecegiz

// bir form u submit ettigimizde,  bir button a tikladigimizda veya bir input alanina odaklandigimizda javascript te belirli eventler olusur.


// const filterInput = document.getElementById("filter");

// 1. ve Eski yontem

// filterInput.onfocus = function(){
//     console.log("hello");
// }

// console.log(filterInput);


// 2. yontem

// filterInput.addEventListener("focus", function(){
//     console.log("hello");
//     // [addEventListener] de ([ne oldugunda],[Fonksiyon])
// });

// fonksiyon icine yazilan [e] parametresi yani [event] bu arada [e] yerine [event] de yazilabilir

// filterInput.addEventListener("focus",function(e){
//     console.log(e);
//     console.log(e.type); // type ni ogren
//     console.log(e.target); // nerede olustugunu ogrenmek icin
//     console.log(e.target.placeholder);
//     console.log(e.target.className);  // class ini ogrenmek icin
// });


const todoForm = document.getElementById("todo-form");  // [button] u degil [form] u sectik, cunki [form-submit-oldugunda] sunu yap buna git gibi birsey yazicaz

todoForm.addEventListener("submit",fosik);

function fosik(e){
    console.log("submit Event i Fosiklendi");

    e.preventDefault();

    // [ e.preventDefault(); ] [revent (engel olmak, onune gecmek)]
    // submit edildigi icin default ozelligi olarak farkli bir adrese gonderiyor. Farkli bir adress olmasa bile(en azindan sayfa yenileniyor)
    // eger biz default ozelligeine engel olmak istiyor isek [.preventDefault] u kullanmaliyiz
}