// Projemizin ana dosyasi burasi olucak

// ilk once form u secelim

// form u secmek
const form = document.getElementById("film-form");  

// imput alanlarin secimi (Film ismi, Yonetmen, Film afis linki)

const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");

// CardBody
const cardbody = document.querySelectorAll(".card-body")[1];

// Clear 
const clear = document.getElementById("clear-films");

// UI objesini Baslatalim ilk once

const ui = new UI();

// Storage Objesi uret
const storage = new Storage(); 

//------------------------------------------------- Tum Eventleri Yukleme -------------------------------------------------

eventListeners();

function eventListeners(){
    form.addEventListener("submit",addFilm);
    // sayfa yuklendiginde local storage daki film leri geri yukleme
    document.addEventListener("DOMContentLoaded",function(){
        let films = storage.getFilmsFromStorage();
        ui.LoadAllFilms(films);
    });
    // cardbody ye click eventi
    cardbody.addEventListener("click",deleteFilm); 
    clear.addEventListener("click",clearAllFilms);
}

// ------------------------------------------------------------------------------------------------------------------------

function addFilm(e){

    //-------------- input larin degerlerinin alimi--------
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;
    // ----------------------------------------------------

    // ------- 3 input un da dolu olduguni kontrol etme ---------

    if(title === "" || director === "" || url === "" ){
        // Hata [ Alert ] Message
        ui.displayMessage("Please fill in the all areas","danger");

    }
    else{
        // Hata yoksa
        // Yeni film olustur
        const newFilm = new Film(title,director,url);

        // UI object uzerinde (addFilm) function i yazma ve bu fonction a yukari da yazilan Film i ekleyecegiz 

        ui.addFilmToUI(newFilm); // arayuze film ekleme

        storage.addFilmToStorage(newFilm); // Storage a film ekleme

        ui.displayMessage("Movie successfully added ","success");
    }

    // -----------------------------------------------------------

    ui.clearInputs(titleElement,directorElement,urlElement);

    e.preventDefault(); // form un submit edilmesini onlemek(prevent) icin bunu yazdik 
}

//--------------------------------- Silme islemleri --------------------------------------

//------------- Tek tek silme --------------------------------
function deleteFilm(e){

    if (e.target.id === "delete-film") {
        // UI dan silme
        ui.deleteFilmFromUI(e.target);
        
        // Local Storage dan silme
        // console.log(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        ui.displayMessage("Delete successfully","success");

        
    }
}
//--------------------------------------------------------------

//---------------------- Clear All -----------------------------
function clearAllFilms(){
    if (confirm("Are You Sure About this ?")){

        ui.clearAllFilmsFromUI();
        storage.clearAllFilmsFromStorage();
    }
   
}