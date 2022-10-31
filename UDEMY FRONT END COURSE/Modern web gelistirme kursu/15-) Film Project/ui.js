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
