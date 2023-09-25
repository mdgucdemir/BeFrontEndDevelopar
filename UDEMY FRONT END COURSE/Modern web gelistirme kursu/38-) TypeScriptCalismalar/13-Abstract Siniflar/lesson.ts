// // Note = Abstract Classes ve Interface leri bilmek zorundasin bir yazilimci olarak

// // --- Abstract Classes ---

// // Abstract Class lar bir class tir ama tek baslarina bir anlam ifade etmezler ve kullanilmazlar. Ancak Inheritance(miras) verme yontemi ile kullanilirlar. 

abstract class KrediBase {
    constructor() {
        
    }

    kaydet():void {
        console.log('kayit edildi');
        // Butun kredilerde kaydetme islemi hepsinde ortak olan bir operasyondur
        // bu metoda [tamamlanmis operasyon] denir
    }

    // Farkli kredi turleri oldugu icin, herbirinin farkli hesaplama metodlari vardir ve kendi class lari icerisinde hesaplanmalidir.
    // Ornegin [Tuketici Kredisi] farkli hesaplanir, [Mortgage Kredisi] farkli hesaplanir
    abstract hesapla():void; // metodun basina 'abstract' yazarak suslu parantez kullanmaniza gerek kalmaz, metodu ihtiyac olan yerde ozellestire bilirsiniz
}


class TuketiciKredisi extends KrediBase {
        
    constructor() {
        super();
        // abstract class larda constructor icerisine super() metodunu yazmak zorundasiniz.
    }

    hesapla(): void {
        console.log('Tuketici kredisi hesaplandi');
    }
}

class MortgageKredisi extends KrediBase {
    constructor() {
        super();
    }
    
    hesapla(): void {
        console.log('Konut Kredisi hesaplandi');
    }

    mortgageOzelOperasyon() {
        console.log('Bu operation sadece Mortgage a ozeldir')
    }
}

let tuketiciKredisi = new TuketiciKredisi;
tuketiciKredisi.kaydet();    // hepsinde ortak olan metod geldi
tuketiciKredisi.hesapla();  // abstract class geldi

let mortgageKredisi = new MortgageKredisi;
mortgageKredisi.kaydet();                   // hepsinde ortak olan metod geldi
mortgageKredisi.hesapla();                 // abstract class geldi
mortgageKredisi.mortgageOzelOperasyon();  // Mortgage a ozel bir operasyondur




// // Asagidaki yazim; surdurulebilir sistemler icindir. 

// // bir fonksiyonunuz oldugunu dusunun fonksiyona parametre olarak 'kredi' verilmistir
let kredi: KrediBase;

// // programci ister ise 'MortgageKredisi' ni parametre olarak gonderiyor
kredi = new MortgageKredisi;

// // programci ister ise 'TuketiciKredisi' ni parametre olarak gonderiyor
kredi = new TuketiciKredisi;