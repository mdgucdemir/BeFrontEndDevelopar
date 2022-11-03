
//------- Http Status code ---------------
// 200 = Ok
// 403 = Forbidden(yasakli)
// 404 = Not Found
// 505 = Internal(ic,dahili) Server Error

// --------------------------------------- 

//-------------- readyState code ---------------

// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready

// -----------------------------------------------

document.getElementById("btn").addEventListener("click",function(){

    // Ajax islemimizi gerceklestirmeye calisalim
    // XMLHttpRequest obejsinden bir tane olusturursak eger, Ajax islemimizi gerceklestiririz 

    const xhr = new XMLHttpRequest();

    // Obejemizi console a yazdiralim bakalim icerisinde neler var
    // console.log(xhr);
    /*
     XMKHttpRequest icerigine bakarsak sayet;

       -(readState: 0) yani herhangi bir server a baglanmadigimizi gosterir
       -Ornegin bize bir yazi yani string bir ifade geldiginde biz bunu (responseText) ten alabiliyoruz 
          Ve alicagimiz deger string oldugu icin biz bunu (JSON.parse) ile JSON a cevirebiliyoruz
       -(status: 0) diye birsey goruyoruz; bunlar (http status code) lari, bu kodlari internetten bakabilirsin
          http response status Link=https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#successful_responses           
       -(onreadystatechange) ozelligine bir tane function eklersek readyState degistigi zaman direk yazdigimiz function calisacak

    */
      
    // // ESKI YONTEM ILE

    // xhr.onreadystatechange = function(){

    // //     // readyState status degistikce bu function calisacaktir
    // //    console.log(this.readyState);
    // //    // goruldugu uzere bize readyState code larini vericektir

    // // // Http Status lere bakalim
    // // console.log(this.status);

    // // Hadi text imizi alalim
    // if(this.status == 200 && this.readyState == 4){
    //     // Response hazir anlamina gelir
    //     console.log(this.responseText);
    // }
    // }

    // // YENI YONTEM ILE
    // // (.onload) sadece response hazir oldugunda calisir, 
    
    xhr.onload = function(){
        // console.log(this.readyState);
        // hata mesaji almis da olabiliriz bunu onlemek adina
        if (this.status === 200) {
            // console.log(this.responseText);
            document.getElementById("ajax").textContent = this.responseText;
        }
    }
    
    // // (.onprogress) ile readyState: 3 oldugu durumda calismasini saglariz ornegin

    // xhr.onprogress = function(){
    //     console.log("3: Processing calisyeeehh =",this.readyState);
    // }


   // xhr objemizi olusturduk, daha sonra bizim baglanti saglamamiz gerekiyor, Hangi request i yapacagimiz yazmamiz gerekiyor(GET,POST,PUT,DELETE) olabilir
   // daha sonra hangi dosyadan alacagimizi soyleyecegiz
   // son olarak bu islemi (asenkron) mu yoksa (senkron) mu oldugunu belirtmeliyiz 
   // ( true )  = asenkron
   // ( false ) = senkron
   xhr.open("GET","example.txt",true);

   // baglantimizi yaptiktan sonra ( send ) ile gondermemiz gerekiyor
   // get request yaptigimiz icin icerisine herhangi bir text yazmamiza gerek yok
   // eger post yapsaydik icerisine bir text yazmamiz gerekirdi (xhr.send("asdhfjaklf");) gibi   
   xhr.send();
});