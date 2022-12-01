
// // ------------ Ornek ile anlatim -----------------------

// function getData(data){ // Promise Objesi donduren function

//     return new Promise(function(resolve,reject){ // Promise donuyoruz
//         // ike tane function aliyor
//         // Olumlu donunusumuzu (resolve) ile donduruyoruz
//         // Olumsuz donusumuzu (reject) ile donduruyoruz
//         setTimeout(() => {
            
//             resolve("olumlu sonuc");
//             // reject("olumsuz sonuc");
            
//         }, 5000);

//     })


// }

// // getData("hello there"); // functon i cagiran code

// // then

// getData("hello there").then(function(response){
//     // function daki (response), (resolve) ile dondugumuz olumlu sonuc oldugu icin, bu olumlu sonuc functon daki (response) a esit olacak
//     console.log(response);

// });

// catch

// getData("hello there").catch(function(err){
//     // burada da ayni durum soz konusu, (reject) teki olumsuz sonuc dondugunde, function da yazdigimiz (err) e esit olucak
//     console.log(err);
// });

// // --------------------------------------------------------------------- //

// // ---------------------- Ornekler ile pekistirme ---------------------- // 

// function getData(data){
//     return new Promise(function(resolve,reject){
//         setTimeout(() => {
//             if(typeof data === "string"){
//                 // Olumlu sonuc donduruceZ
//                 resolve(data);
//             }
//             else{
//                 // Olumsuz sonuc dondurucez
//                 reject(new Error("Please Write A String Value..."));
//             }
            
//         }, 5000);
//     });
// }

// // then & catch i birbirine baglayarak yazabiliriz

// // getData("hello there").then(function(response){
// //     console.log("Gelen Deger: " + response);
// // }).catch(function(err){
// //     console.log(err);
// // });

// // getData(1231).then(function(response){
// //     console.log("Gelen Deger: "+response);
// // }).catch(function(err){
// //     console.error(err);
// // });

// //---------- Daha duzenli bir yazim yapalim ------------

// getData(32)
// .then(response => console.log("gelen deger: " + response))
// .catch(err => console.error(err)); // bu sekilde de yazim yapabiliriz

//--------------------------------------------------------//

// // --------------------------------------------------------------------- //

// // ---------------------- Ornekler ile pekistirme ---------------------- // 

function addTwo(number){

    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(typeof number === "number"){
                //
                resolve(number+2);
            }
            else{
                //
                reject(new Error("Lutfen bir sayi gir lo"));
            }
        }, 3000);
    });
}

addTwo(2)
.then(response => {
    console.log(response);
    return response + 2; // return ile response 2 ile toplayip bir daha deger donduruyoruz
}).then(response2 => console.log(response2)) // 2.kez then ile response2 yi yakakliyoruz
.catch(err => console.error(err));

// NOT: arka arkaya (catch) kullanilmaz sadece bir kere kullanirsin, ama then i arka arkaya kullanabilirsin
// Promise chain yaparken 1 tane catch, birden cok then kullanilir

// // --------------------------------------------------------------------- //