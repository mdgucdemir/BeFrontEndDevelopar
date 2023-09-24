

// // Inheritance

class Kisi {
    kaydet() {
        console.log('kisi kayit edildi');
    }
}

class Musteri extends Kisi {
    satisYap() {
        console.log('satis yapildi');
    }
}

class Personel extends Kisi {
    maasOde() {
        console.log('maas odendi')
    }
}

let musteri = new Musteri;
musteri.kaydet();   // Kisi class indan inheritance(miras) olarak geliyor
musteri.satisYap(); 

let personel = new Personel;
personel.kaydet();  // Kisi class indan inheritance(miras) olarak geliyor
personel.maasOde();