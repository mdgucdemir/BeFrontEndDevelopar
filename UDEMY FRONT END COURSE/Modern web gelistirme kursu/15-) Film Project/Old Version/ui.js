// ui.js de (arayuz) User Interface islemlerimizi tanimlamak icin kullanacagiz

// ilk basta biz fiimlerimizi eklemeye calisacagimiz icin ilk basta bir (UI Constructor) a ihtiyacimiz var

// user interface islemlerini UI objesinin prototype inda yapmaya calisacagiz

function UI(){

}
UI.prototype.addFilmToUI = function(newFilm){

    // console.log(newFilm); // Deneme amacli console yazdiralim

    // code calisiyor Filmi Arayuze ekleyelim

    /*

    <!-- <tr>
    <td><img src="" class="img-fluid img-thumbnail"></td>
    <td></td>
    <td></td>
    <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
    </tr> -->

    */

    const filmList = document.getElementById("films"); // bu yapimizi (tbody) ye yerlestimemiz gerekiyor, onun icin ilk (tbody) i secmemiz lazim
    filmList.innerHTML += `

    <tr>
        <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
        <td>${newFilm.title}</td>
        <td>${newFilm.director}</td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
    </tr>
    
    `
}
//---------------------------------------------------------------------------------------------------------------------------------------

//----- Input larda bilgi ekleme yaptiktan sonra yeni bilgilerin eklenmesinde kolaylik olunmasi icin, imputlarda ki yazilarin silinmesi --------
UI.prototype.clearInputs = function(element1,element2,element3){
    element1.value = "";
    element2.value = "";
    element3.value = "";
}
//----------------------------------------------------------------------------------------------------------------------------------------------

UI.prototype.displayMessage = function (message,type){
    // card-body secimi
    const cardBody = document.querySelectorAll(".card-body")[0];
    // Alert div ini olusturma
    const div = document.createElement("div");

    //div e className verme
    div.className =`alert alert-${type}`;

    // div e textContent verme
    div.textContent = message;

    // Card-Body e new Child olarak ekleme
    cardBody.appendChild(div);


    // Olusan Message i 1 sn sonra kaldirma

    setTimeout(() => {
        div.remove();
    }, 1000);

}

UI.prototype.LoadAllFilms = films => {

    const filmList = document.getElementById("films");

    // forEach ile tum filmlerin uzerinde gezinmem ve her filmim i almam gerekiyor

    films.forEach(function(film){

        filmList.innerHTML += `

        <tr>
        <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
        <td>${film.title}</td>
        <td>${film.director}</td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr>
        
        `
    });


}
UI.prototype.deleteFilmFromUI = function(element) {
    // silme isleminde <tr> yi kaldirmak icin 2 kere (parentElement) islemi yapmamiz gerekiyor
    element.parentElement.parentElement.remove();
}

UI.prototype.clearAllFilmsFromUI = function(){

    const filmList = document.getElementById("films");
    
    while(filmList.firstElementChild !== null) { // Child oldugu surece
        filmList.firstElementChild.remove();

    }
}