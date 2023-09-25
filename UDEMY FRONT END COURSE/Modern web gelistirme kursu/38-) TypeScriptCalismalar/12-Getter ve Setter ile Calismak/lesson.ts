

// // Getter ve Setter bir Encapsulation (kapsulleme) teknigidir. 
// // get ==> almak
// // set ==> kurmak

class Kisi {
    private _isim: string;

    // // get 
    get isim():string {
        return 'sayin: ' + this._isim;
    }

    // //  set
    set isim(ad:string) {
        this._isim = ad;
    }

    kaydet () {
        console.log('kisi kayit edildi');
    }
}

class Musteri extends Kisi {
    satisYap() {
        console.log('satis yapildi');
    }
}

class Personel extends Kisi {
    odemeYap() {
        console.log('odeme yapildi')
    }
}

const musteri = new Musteri;
musteri.isim = 'Deniz';
console.log(musteri.isim);    // cikti " sayin: Deniz "

