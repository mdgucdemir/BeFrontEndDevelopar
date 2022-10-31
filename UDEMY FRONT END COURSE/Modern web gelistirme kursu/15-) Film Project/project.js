// Projemizin ana dosyasi burasi olucak

// ilk once form u secelim

// form u secmek
const form = document.getElementById("film-form");  

// imput alanlarin secimi (Film ismi, Yonetmen, Film afis linki)

const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");

// UI objesini Baslatalim ilk once

const ui = new UI();

// Tum Eventleri Yukleme

eventListeners();

function eventListeners(){
    form.addEventListener("submit",addFilm);
}

function addFilm(e){

    //-------------- input larin degerlerinin alimi--------
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;
    // ----------------------------------------------------

    // ------- 3 input un da dolu olduguni kontrol etme ---------

    if(title === " " || director === " " || url === " " ){
        // Hata

    }
    else{
        // Hata yoksa
        // Yeni film olustur
        const newFilm = new Film(title,director,url);

        // UI object uzerinde (addFilm) function i yazma ve bu fonction a yukari da yazilan Film i ekleyecegiz 
        ui.addFilmToUI(newFilm); // arayuze film ekleme
    }

    // -----------------------------------------------------------

    ui.clearInputs(titleElement,directorElement,urlElement);

    e.preventDefault(); // form un submit edilmesini onlemek(prevent) icin bunu yazdik 
}