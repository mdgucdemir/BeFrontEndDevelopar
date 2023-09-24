
// // Note = Erisimlerde [ this. ] parametre sini kullanmayi sakin unutma

// // ( private ) = tanimlandigi class icerisinde gecerlidir.
// // ( protected ) = [tanimlandigi class] icerisinde ve [Inheritance(miras) verdigin class] icerisinde de gecerlidir
// // ( public )  = herkes erisebilir demek

class Kisi {
    private isim: string; // sadece bu class da kullanilir
    protected soyIsim: string; // bu class da ve bu class a inheritance olan class larda kullanilir
    public yas: number; // heryerde kullanilir

    kaydet() {
        console.log(this.isim + 'kisi kayit edildi')
    }
}

class Musteri extends Kisi {
    odemeYap() {
        let surName = this.soyIsim // protected kullanildigi icin geldi
        console.log(surName + ' soy isimli musteri odeme yapti')
    }
}

class Personel extends Kisi {
    maasYatir() {
        const surname = this.soyIsim   // protected kullanildigi icin geldi
        const age = this.yas          // public kullanildigi icin geldi 
        console.log(age + ' yasinda,' + surname + ' soyadin daki calisana maasi yatirildi' )
    }
}

let musteri = new Musteri;
musteri.yas;  // public oldugu icin global de kullanabiliriz