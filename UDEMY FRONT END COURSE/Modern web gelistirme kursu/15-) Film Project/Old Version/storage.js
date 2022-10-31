// Local Storage ile ilgili islemlerimiz burada gerceklestirecegiz

function Storage(){

    // icerisinde birsey olmayacak UI gibi, Sadace prototype ina fonction lari ekleyecegiz
}

Storage.prototype.addFilmToStorage = function(newFilm){ 

    let films = this.getFilmsFromStorage();

    films.push(newFilm);
    // su ana kadar biz array e string degerleri atiyor idik simdi ise (OBJECT) aticaz
    
    /* Yani su sekilde olucak

    [
        {title:"adfasdf",dircetor:"ahjfgasdfhj",url:"jklfgsdfg"},
        {title:"adfasdf",dircetor:"ahjfgasdfhj",url:"jklfgsdfg"},
        {title:"adfasdf",dircetor:"ahjfgasdfhj",url:"jklfgsdfg"},
             
    ]

    */
   localStorage.setItem("films",JSON.stringify(films));

}

Storage.prototype.getFilmsFromStorage = () => {

    // Ilk once filmimizi array e yazicaz sonra bu array imizi local storage a ekleyecegiz
    // Ancak local storage de daha incesinden bir array imiz olabilir, yani 1-2 tane icerisinde (film) bulunan bir array imiz olabilir
    // ilk basta bunu sorgulamali varsa bunlari ilk once almaliyiz, yoksa bos bir array olusturmaliyiz

    let films;

    if (localStorage.getItem("films") === null) {

        films = [];
    }
    else {
        // local storage sadece string degerler kabul ediyor du.
        // Aldigimiz string degeri (parse) etip (array) e cevirmemiz gerekiyor 
        films = JSON.parse(localStorage.getItem("films"));

    }
    return films;


}

Storage.prototype.deleteFilmFromStorage = function(filmTitle) {

    let films = this.getFilmsFromStorage();

    films.forEach(function(film,index){
        if (film.title === filmTitle){
            // Array den silmek icin ( splice ) i kullaniyoruz = splice(index,kac tane silmek istiyorun (1=sadece kendi bulubndugu index i siler) )
            films.splice(index,1);
        }

    });

    // Array silme islemi tamam, simdi bunu local Storage a tekrar yazmamiz gerekiyor
    // Aksi halde local storag dan silinmiyor
    localStorage.setItem("films",JSON.stringify(films));
}

Storage.prototype.clearAllFilmsFromStorage = function(){

    localStorage.removeItem("films");
}