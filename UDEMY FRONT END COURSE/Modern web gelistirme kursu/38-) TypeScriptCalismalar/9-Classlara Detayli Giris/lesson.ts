

// // Class
// // class lar bir referans veri tipidir. Array ler gibi

class Ev {
    _katSayisi: number;
    _odaSayisi: number;
    _pencereSayisi: number;
    constructor(kat:number,oda:number,pencere:number) {
       this._katSayisi = kat;
       this._odaSayisi = oda;
       this._pencereSayisi = pencere;
    }
    

    yemekYe() {
        console.log(this._katSayisi + '. katta yemek yenildi');
    }

    
}

let ev = new Ev(5,3,6);
ev._katSayisi;
ev._odaSayisi;
ev._pencereSayisi;
ev.yemekYe(); // cikti [ 5. katta yemek yenildi ]

console.log(ev._katSayisi);
console.log(ev._odaSayisi);
console.log(ev._pencereSayisi);