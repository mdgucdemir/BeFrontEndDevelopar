

// // --- Generic ---
// // farkli tipleri ayni islemde yapmak icin kullanilir

function deger(x:number):number {
    return x;
}

function deger2(x:string):string {
    return x;
}

let sayi = deger(10);
console.log(sayi); // citki 10

let city = deger2("Austin");
console.log(city); // cikti Austin

// // // Generic kullanimi // // //
// generic kullaniminda function i tanimlar iken function isminin sonuna <T veya istedigini yazabilirsin> | genelde T (type dan gelir) kullanilir
// function da deger tanimlamsi yaparken function i tanimlading degeri kullanmalisin 
// function ciktisini da basta tanimladigin degeri tanimlamalisin
// function i cagirdiginda ve icerisine deger atamasi yaptiginda degerin (string veya number) oldugunu belirmelisin

function deger3<T>(x:T):T {
    return x;
}

let sayi3 = deger3<number>(23);
let city3 = deger3<string>("Austin");
console.log(sayi3);
console.log(city3);

// // function larda oldugu gibi generic class larda yapilir;