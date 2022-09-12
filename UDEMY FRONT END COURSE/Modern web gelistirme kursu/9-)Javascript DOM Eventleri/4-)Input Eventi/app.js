

const filter = document.getElementById("filter");

// [DOMContentLoaded] 
// document in tamami yuklendikten sonra bu event imiz olusuyor

// document.addEventListener("DOMContentLoaded",load);

// function load(e){
//     console.log("Page Loaded");
// }



// INPUT EVENTLERI


// [Focus event] i



// filter.addEventListener("focus",run);

// function run(e){
//     console.log(e.type);
// }



// [Blur event] i



// focus tan ciktiktan sonra olusur

// filter.addEventListener("blur",run);

// function run(e){
//     console.log(e.type);
// }



// [Paste event]



// Paste yaptigimizda calisir

// filter.addEventListener("paste",run);

// function run(e){
//     console.log(e.type);
// }



// [Copy event] i



// Siteden copy yaptigimiz zaman calisan bir event

// filter.addEventListener("copy",run);

// function run(e){
//     console.log(e.type);
// }




// [Cut event] i 



//  siteden cut yaptigimiz zaman calisan event 


// filter.addEventListener("cut",run);

// function run(e){
//     console.log(e.type);
// }




// [Select] event i 



// sayfa da belirli bir kisim ya da yazi sectigimizde calisan event

filter.addEventListener("select",run);

function run(e){
    console.log(e.type);
}




