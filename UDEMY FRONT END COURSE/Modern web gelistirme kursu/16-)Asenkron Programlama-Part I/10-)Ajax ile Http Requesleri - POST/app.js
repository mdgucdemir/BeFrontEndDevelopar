

//------------------ POST REQUEST ----------------------------

class Request{

    constructor(){

        this.xhr = new XMLHttpRequest();
    }

    get(url,callback){ // Get Function
        this.xhr.open("GET",url); // connection done
        this.xhr.onload = () => { // onload and arrow function done

            if(this.xhr.status === 200){

                callback(null,this.xhr.responseText);
            }
            else{
                callback("GET Request: Huston we got a problem",null);
            }

        }
        this.xhr.send(); // Get request done
    }
 
    // ----------- Post Request --------------

    post(url,data,callback){ // Post Request
        // Ilk once baglantimizi acmamiz gerekiyor
        this.xhr.open("POST",url);
        
        // hangi veri gonderecegimizi [setRequestHeader] yardimi ile belirmemiz gerekiyor. Biz (json) verisi gonderecegiz
        this.xhr.setRequestHeader("Content-type","application/json"); // GET Request ten tek farki bir header gondermek

        this.xhr.onload = () => {

            // onceki ornekler status = 200 kodunu kontrol etmistik simdi ise [ 201 (created) ] code nu kontrol edecegiz 
            if(this.xhr.status === 201) {

                // eger status 201 ise yeni bir kaynagimiz olusmustur
                // SUCCESS STATUS
                callback(null,this.xhr.responseText);
            }
            else{
                callback("POST Request: Something wrong",null);
            }
        }

        // Verimizi gondermek icin || verimizi string olarak gondermemiz gerekiyor onun icin [JSON.stringify(data)] || cunki data ya gonderiyoruz onuda belirmemiz lazim
        this.xhr.send(JSON.stringify(data)); 
    }

}

const request = new Request();

// request.get("https://jsonplaceholder.typicode.com/albums",function(err,response){
//     if(err === null){
//         console.log(response);
//     }
//     else{
//         console.log(err);
//     }

// })

request.post("https://jsonplaceholder.typicode.com/albums",{userId:2,title:"thriller"},function(err,album){
    //
    if (err === null){
        // olusturdumuz albumde hata yoksa bunu (response) olarak alacagiz
        console.log(album);
    }
    else{
        console.log(err);
    }
});