
//                                                 Window objesi

// window objesi javascrip te en genel objedir

// console.log(window);

//       [alert]

// alert("hello");  // hello yazan bir pop-up acilir. Alert window un bir ozelligidir

//       [confirm] islemi

// const cevap = confirm("emin misin?");

// console.log(cevap);

// if(confirm("emin misin?")){
//     console.log("Emin sin :)");
// }
// else{
//     console.log("Emin degilsin :(");
// }

//        [prompt] kullanicidan input alma

// const cevap = prompt("2 + 2 = ?"); 

// if (cevap == "4") {
//     console.log("dogru cevap");
// }
// else{
//     console.log("hatali cevap");
// }

let value;

value = window;
value = window.location;
value = window.location.host;
value = window.location.hostname;
value = window.location.port;
value = window.location.href;

// if (confirm("sayfa yenilensin mi?")){
//     window.location.reload();
// }
// else{
//     console.log("sayfa yenilenmedi");
// }

value = window.outerHeight; // bu sayfanin hersey dahil pixel uzunlugu verir
value = window.outerWidth;  // bu da sayfanin hersey dahil genisligini verir

value = window.innerHeight;  // bu da  gorunen internet sayfasinin uzunlugunu verir
value = window.innerWidth;   // bu kod ise gorunen internet sayfasinin genisligine verir

// scroll ozelligi

// value = window.scrollX;
// value = window.scrollY;

console.log(value);