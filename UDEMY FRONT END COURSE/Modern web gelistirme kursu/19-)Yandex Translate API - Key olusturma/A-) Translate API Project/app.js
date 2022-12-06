// genel dosyamiz olacak

// Prototype,Ajax ve callback ler kullanilacak



//--- eventListeners ---

eventListeners();


function eventListeners(){
    document.getElementById("translate-form").addEventListener("submit",translateWord());

    //change
    document.getElementById("language").onchange = function(){ // change islemi addEventListener ile event yapildiginda bagzi browser larda hata gosterdigi icin bu sekilde yaptik
        // Arayuz islemleri
        UI.changeUI();
    }
}

//--- eventListeners ---

const translate = new Translate(document.getElementById("word").value,document.getElementById("language").value);
const ui = new UI();

function translateWord(e){

    translate.changeParameters(document.getElementById("word").value,document.getElementById("language").value);

    translate.translateWord(function(err,response){

        if(err){
            // err null bir deger gelmedigi surece hata var anlamina gelecek
            console.log(err)
        }
        else{
            ui.displayTranslate(response);
        }
    });

    e.preventDefault(); // sayfanin durmadan yenilenmesini onlemek icin
}