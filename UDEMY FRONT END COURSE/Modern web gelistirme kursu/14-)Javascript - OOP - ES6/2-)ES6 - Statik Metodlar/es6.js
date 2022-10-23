// ------------------------------------------- STATIC METHODS ------------------------------------------

// static method lar duragan metodlardir. Class in icine static metod yazarsak biz bunlari obje olusturmadan kullanabiliyoruz.

//-------- Eski yazim ile

// class Matematik {

//     cube (x) {
//         console.log(x*x*x);
//     }
// }

// const math = new Matematik();

// // console.log(math);
// math.cube(3);

// ---------- Static Method ile

class Matematik {

    static cube(x){
        console.log(x*x*x);
    }
}

// obje kullanmadan bunu yapabiliriz ( classIsmi.Metod() )

Matematik.cube(4);  // ObjeIsmi.method()

// Static method lari kullanirken object olusturmuyoruz, Olusturarak method u calistirmaya kalkarsak sayet "TypeError" aliriz.


//------ Statik Method olarak daha onceden kullandiklarimiz
// Object.create()
// Math.sqrt()
// console.log(Math.pow(5,3));

