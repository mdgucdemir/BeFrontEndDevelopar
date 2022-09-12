
// DOM projelerinde cok kullanilan [Event Capturing] ve [Event Bubbling] ozellikleri

// [Event Capturing] ve [Even Bubbling] Javascript e ozgu bir ozellik degil HTML Document e ozgu bir Ozelliktir 



// [Event Bubbling] (Olay Kabarciklanmasi)


// ornegin biz en alttaki bir child dan bir click eventi olusturursak [bubbling] (kabarciklanarak) en ustte ki parent e kadar ulasir.

// document.querySelector(".container").addEventListener("click",function(){
//     console.log("div container");
// });

// document.querySelector(".card.row").addEventListener("click",function(){
//     console.log("card row");
// });

// document.querySelectorAll(".card-body")[1].addEventListener("click",function(){
//     console.log("card row");
// });

// click olayini [Event Bubbling] ozelliginden dolayi hepsi birden yakalayacak




// [Event Capturing] veya [Delegation] ozelligi

const cardbody = document.querySelectorAll(".card-body")[1];

cardbody.addEventListener("click",run);

// Bubbling in aksine sadece tanimlandigi bolgede calisiyor

function run(e){

    // console.log("hello");

    if (e.target.className === "fa fa-remove"){
        console.log("silme islemi");
    }

    if (e.target.id === "filter"){
        console.log("filter islemi");
    }

    if (e.target.id === "clear-todos") {
        console.log("tum tasklari silme islemi");
    }
}

// [ target ] imlec ile nereye bastigimizi yakalamamizi sagliyor