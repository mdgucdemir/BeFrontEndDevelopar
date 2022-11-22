
// request pratiklarini JSONPlaceholder isminde ucretsiz bir API sayesinde yapacagiz
// Link = https://jsonplaceholder.typicode.com

// Ajax ve callback kullanarak (http Requestleri) atmaya calisacagiz

class Request{

    constructor(){
        this.xhr = new XMLHttpRequest();
    }
    // GET Request
    // ilk once (callback) yontemi kullanilacak daha sonra (promise) ve (async/await) yontemlerini de kullancagiz

    // get(url){

    //     this.xhr.open("GET",url); // baglantimiz actik
        
        
    //     // hatadan kurtulmak icin yazilan [ilkel yontem]
    //     // const temp = this; 
    //     // (get(url) ) => (class Request) object in bir functon i oldugu icin buradaki this [Request] object ini gosterecek

    //     // this.xhr.onload = function(){
    //     //     // undefined hatasi aldik, this i bir console yazdiralim
    //     //     // console.log(this); 

    //     //     // buradaki this (xhr yani [XMLHttpRequest]) i gosteriyor biz ise (xhr) in uzerinden (xhr) a ulasmaya calisiyoruz, oyle biz ozelligimiz olmadigi icin hata aliyoruz
    //     //     // eger buradaki this (Request) i gosterse idi (this.xhr) ozelligimiz oldugu icin buna ulasabilecektik
    //     //     // ancak buradaki this (this.xhr) kendisini gosteriyor
    //     //     // bu hatadan kurtulmanin bir cok yolu var, biz simdi en ilkel olan yontemi yapacagiz(const temp = this;)


    //     //     // // hatali yazim

    //     //     // if(this.xhr.status === 200){
    //     //     //     console.log(this.xhr.responseText);
    //     //     // }

    //     //     // // 1. yontem [ilkel yontem]
    //     //     // if(temp.xhr.status === 200){
    //     //     //     console.log(temp.xhr.responseText);
    //     //     // }

    //     //     // // 2.yontem (xhr kalari kaldirma)

    //     //     // if(this.status === 200){
    //     //     //     console.log(this.responseText);

    //     //     //     // [(this.xhr.status) yerine (this.status) ] ve [ (this.xhr.responseText) yerine (this.responseText) ] yazar isek sorun cozulur
    //     //     //     // zira buradiki (this) [xhr] i gosteriyor
    //     //     // }

    //     //     // 3. Yontem ( .bind(this) )

    //     //     // console.log(this); // this artik Request objeseini gosteriyor
    //     //     //  if(this.xhr.status === 200){
    //     //     //     console.log(this.xhr.responseText);
    //     //     // }

            
            
    //     // }.bind(this);
        

    //     // 4. Yontem (Arraw function)

    //     // Arrow function ise bind islemini kendisi gerceklestiriyor
    //     // hatirlasan arrow function ile bir this ornegi yapmistik ve window objesini gosteriyor du o ornekte

    //     this.xhr.onload = () => {
    //         if(this.xhr.status === 200){
    //             // console.log(this);
    //             console.log(this.xhr.responseText);
    //         }
    //     }
        


    //     this.xhr.send();
    // }



    get(url,callback){

        this.xhr.open("GET",url); // baglanti kuruldu - acik

        this.xhr.onload = () => {

            if(this.xhr.status === 200){
                callback(null,this.xhr.responseText);
                // hata olmadigi durumu icin ilk once null degeri gonderiyoruz
            }
            else{
                // hata durumu
                callback("HATA VAR LOO",null);
                // donen bir degerimiz olmadigi icin yani hata olmadigi icin 2.bir deger olarak null gonderebiliriz
            }
        }

        this.xhr.send(); // GET request yapildi
    }

}

// request ten bir object olusturalim
const request = new Request();

request.get("https://jsonplaceholder.typicode.com/albums",function(err,response){
    // (err) null mu degil mi diye kontrol yapacagiz
    if (err === null){
        // err = null ise yani err bos bir deger ise hata yok hersey yolunda demektir
        console.log(response);
    }
    else{

        // hata var ise hata mesajimizi (err) ile yazdirabiliriz
        console.log(err);
    }
});

// request.get("https://jsonplaceholder.typicode.com/albums/50",function(err,response){
//     // id si 50 olani getirdik

//     if (err === null){       
//         console.log(response);
//     }
//     else{       
//         console.log(err);
//     }
// });