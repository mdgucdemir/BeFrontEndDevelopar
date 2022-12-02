// ------------ FETCH --------------------

// Fetch Ajax in yerine kullanilan alternatif bir asenkron (veri alma - veri gonderme) API dir.

// Fetch API (window) object inin icerisinde bulunan (fetch) metodu sayesinde kullanmamizi saglayacak

// Fetch api yi ajax tan daha kolaydir

// fetch de olumlu islemleri (resolve) ile dondurup (then) ile yakaliyoruz yani (promise) yapisi kullaniliyor
// fetch olumsuz sonucu (reject) ile donduruyor biz bunu da (catch) ile yakaliyoruz

// bu orneklemelerde [text dosyasindan, json dosyasindan & uzaktaki bir rest api dan] json verilerimiz ve text verilerimizi almacagiz

//-------------------------------------------------------------------//

function getTextFile(){ // TEXT DOSYASINDAN VERI ALMA

    // // window objesinde fetch metodunu bulma
    // console.log(this);

    fetch("example.txt")
    .then(response => {
        // isterse [ .then(response => response.text) seklinde de yazabiriliriz, cunku tek bir islem ve tek bir deger donuyor o yuzden (return) u bir daha yazmaya gerek yok ]
        // console.log(response);
        return response.text();
        // return ile text dondurdugumuz icin bize promise olarak geliyor, bir kez daha then ile donen degeri almamiz gerekiyor
    })
    .then(data => console.log(data))
    .catch(err => console.error(err));

    // response in icerisindeki (text) function i kullanirsak .then de tanimlananan response daki text i almis olacagiz

}


function getJsonFIle(){ // LOCAL BIR JSON DOSYASINDAN VERI ALMA
    
    fetch("example.json")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
}

function getExternalAPI(){  // REST API DEN VERI ALMA
    
    fetch("https://open.er-api.com/v6/latest/USD")
    .then(response => response.json())
    .then(data => console.log(data.rates.TRY))
    .catch(err => console.error(err));
}

// getTextFile();
// getJsonFIle();
getExternalAPI();

//-------------------------------------------------------------------//