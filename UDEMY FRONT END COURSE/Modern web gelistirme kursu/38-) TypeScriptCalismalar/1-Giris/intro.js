// enter the typeScript //
// typescript in icerisinde javascript yazabiliriz.
// function greeter (name) {
//     return 'hello ' + name;
// }
// let result = greeter('deniz');
// console.log(result);
// typescript te yazilanlar aslinda javascript te cevrilir ve javascript olarak calistirilir. Typecript daha [kontrollu] bir sekilde code yazmamizi saglar
// function greeter (name) {
//     return 'hello ' + name;
// }
// let result = greeter(2);
// console.log(result);
// function greeter (name) {
//     return 'hello ' + name;
// }
// let result = greeter(2);
// console.log(result);
// function greeter (name) {
//     return 'hello ' + name;
// }
// let result = greeter(['deniz',3, true]);
// console.log(result);
// // yukaridaki ornekte name ilk once bir [integer] sonra bir array icerisinde [string, integer, ve boolean] bir deger atatik ve[ hepsini bir name = isim] olarak aldi.
// // halbuki biz name ozelliginde sadace name olmasini bekleriz
// // iste bu javascript in [esnekligi] ile alakali bir durum, [kaygi verici] bir durum.
/// typescript yazimi ////
// function greeter (name:string) {
//     return 'hello ' + name;
// }
// let result = greeter(2);
// console.log(result);
// // yukarida name e sadece string olmasini belirttik ve bir integer degeri atadik. sonuc, HATA VERDI. iste typescript in en basit hali ile guzelligi.
function greeter(name) {
    return 'hello ' + name;
}
var result = greeter('deniz');
console.log(result);
// // yukarida yazilan typescript codunu compile edip, javascript e cevirmemiz lazim 
/*
  compile islemi icin:
  terminal'e = [tsc DosyaAdi.ts]
  aciklamasi = [typescript compile dosyaAdi.ts]
  ornek => ( tsc intro.js )
*/
// // ve goruldugu gibi bir .js dosyasi olarak compile edildi
// // Not ==> compile islemi sonrasi .ts dosyasinda bir degisikligi gidildiginde (nokta dahi koysan .ts dosyasina) hata veriyor. 
// // hata giderimi icin compile edilen .js dosyasini sil yeniden (degisikler ile birlikte) tekrar compile et 
