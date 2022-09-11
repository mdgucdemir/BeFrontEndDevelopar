// Klavye Eventleri





// KeyPress

/* KeyPress klavyede bizim sadece 
            harfler, karekterler(-=+_,.<>/?{}[]()/*-+ de dahil) ve sayi tuslarina  bastigimizda calisan bir event tir.
                 [f1-f12 ok tuslari ve onun ustundekiler haric ] */

//  document.addEventListener("keypress",run);

//  function run (e){
//     // console.log("hello");
//     // console.log(e.which); // Hangi tusa bastigimizin [ASCI] tablosundaki degerini verir.

//     console.log(e.key);  // Hangi tusa bastigimiin [karakter] olarak karsiligini gosterir
//  }


 
 
 // KeyDown

// Klavye deki herhangi bir tusa ( Tum tuslar gecerlidir ) bastigimizda bir event in calismasini istiyor isek [KEYDONW] event ini kullanmaliyiz

// document.addEventListener("keydown",down);

// function down (event){
//     console.log("hello");
//     console.log(event.key);
// }


// KeyUp

// Bir tane tusa basip-biraktigimiz an da calisan event [KeyUp] event tidir

// document.addEventListener("keyup",up);

// function up (e){
//     console.log("hello Event");
//     console.log(e.key);
// }

const header = document.querySelector(".card-header");

const todoInput = document.querySelector("#todo");

todoInput.addEventListener("keyup",changeText);

function changeText(e){
    header.textContent = e.target.value;
   
    // Bir input alanindan deger lamak istiyorsaniz [e.target.value] yi kullanabilirsiniz

    // console.log(e.target.value);
}