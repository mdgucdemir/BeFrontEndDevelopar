
// // --- Generic Classes ---


class GenericClass<T> {
    degisken: T;
    birFonksiyon(parametre: T):T {
        return parametre;
    }
}

let deger = new GenericClass<number>();
deger.birFonksiyon(32);
deger.degisken = 21;

let fosik = new GenericClass<string>();
fosik.degisken = 'losik';
fosik.birFonksiyon('dosik')
