
// --- CALLBACK CEHENNEMI ---

// ---- Ornek ile ----

a(function(resultFromA){
    b(resultFromA,function(resultFromB){
        c(resultFromB,function(resultFromC){
            d(resultFromC,function(resultFromD){
                e(resultFromD,function(resultFromE){
                    f(resultFromE,function(resultFromF){
                        console.log(resultFromF);
                    })
                })
            })
        })
    })
});

// ------   ---------  --------- -----

// Javascript gelistiricileri callback lerin dezavantajlarini ortadan kaldirmak icin ES6 ile birlikte gelen [ promise ] yapisini ortaya koydular.

// (Promise) aslinda bir object ten hicbir farki yok

/*

(Resolve) ile olumlu durumlari
(Reject) ile hata durumlari

(then) ile olumlu durumlari yakaliyoruz
(catch) ile hata durumlarini yakaliyoruz

*/