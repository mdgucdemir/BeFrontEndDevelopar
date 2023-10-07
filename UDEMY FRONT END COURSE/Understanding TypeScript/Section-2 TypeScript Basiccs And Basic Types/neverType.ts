// // -- The " never " Type

/* 
  TypeScript'de "never" tipi, 
  genellikle işlevlerin veya ifadelerin hiçbir zaman bir değer döndürmediği veya tamamlanamayacağı durumları ifade etmek için kullanılan bir tipe verilen addır.
  "never" tipi, genellikle hata işleme, sınırsız döngüler veya tip uyumsuzluğu gibi durumlarla ilgilidir.
*/

function generateError(message: string, code: number): never {
    // bu ornek te never, bu function in bir deger dondurmeyecegini ifade eder. Burada bir hata firlatma durumu vardir    
  throw { message: message, errorCode: code };

//    while(true) {
//     // bu bir sonsuz dongudur ve bir deger dondurmeyecektir. O yuzden never type kullanmak uygun olacaktir.
//    }
 
}

generateError("An error occurred", 500);
