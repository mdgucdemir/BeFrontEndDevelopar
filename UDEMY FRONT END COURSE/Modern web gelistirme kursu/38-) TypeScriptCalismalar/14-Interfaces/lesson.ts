
// // --- Interfaces ---
// // Interface(arayuz) ler abstrack class lardan farkli olarak sadece ve sadece tamamlanmamis imzalar barindirir.

interface Product {
    id: number;
    name: string;
    unitPrice: number;
    // bir method da yukaridaki tanimlanan degerlerin tamamini girilmesini istiyor ve tammami girilmeden isleme devam edilmemesini istiyor isek 
    // o zaman (interface) i kullanmaliyiz
}

function save(product: Product) {
    console.log(product.id + " " + product.name + " " + product.unitPrice + ' kayit edildi');
}

// save metodunu cagiracagiz ve typescript bize Product in elemanlarinin tamamini doldurmamizi isteyecek 
// doldurma islemi object olarak yapilmalidir -- // save({}) gibi
save({id:1,name:'laptop',unitPrice:10});


// Note => butun degerleri vermek gerekmiyor ise (class) kullan. Eger butun degerleri vermek gerekiyor ise (Interface) kullan.

interface PersonService {
    save();
    // tam olmayan bir metod. implements edilecegi yerde operasyon tamamlanacak
}

class CustomerService implements PersonService { // extends gibi implements i unutma
   save() {
    console.log('burada implements mevzusu vukuu bulmustur :)');
   }       
}