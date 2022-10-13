
// DESTRUCTING


// Destructing aslinda bizim [array] lerimizin icinden veya [object] lerimizin icinden degerlerimizi degerlerimizi almak icin kullandigimiz (kisa bir yol)

// Destructing i kullanarak bazi islemlerimizi kisaltabiliriz



// ARRAY DESTRUCTING


// let number1,number2;

// arr = [100,200,300,400];

// number1 = arr[0];
// number2 = arr[1];

// Destructing yapisi ile

// [number1,number2] = arr;

// [number1,number2] = [100,200,300,400] burada [number1 = 100] ve [number2 = 200] esit oluyor

// const [number1,number2] = arr;

// console.log(number1,number2);


// OBJECT DESTRUCTING


// const numbers = {
//     a:10,
//     b:20,
//     c:30,
//     d:40,
//     e:50
// }

// boyle bir tanimlama yaparsak [undefined] bir tanimlama olucak

// const {number1,number2,number3} = numbers; 

// const {a,c,e} = numbers

// illa object teki tanimlamari [a,b,c,d,e gibi] isimlendirmeleri kullanmak istemiyor kendi isimlendirmelerimizi yapmak istiyor isek;

// const {a:number1,c:number2,e:number3} = numbers

// console.log(number1,number2,number3);



// FUNCTION DESTRUCTING

// const getLangs = () => ["Python","Java","Html"];

// const [lang1, lang2, lang3] = getLangs();

// console.log(lang1,lang2,lang3);


// bir object ornegi daha

const person = {
    name:"mehmet deniz",
    year:1990,
    salary:12500,
    showInfos: () => console.log("Bilgiler gosteriliyeeehh...")
}

const {name:isim, year:yil, salary:maas, showInfos:bilgileriGoster} = person;

console.log(isim, yil, maas);
bilgileriGoster();