let value;

const value1 = 10;
const value2 = 4;

// Aritmatik operatorler

// value = value1 + value2;
// value = value1 - value2;
// value = value1 * value2;
// value = value1 / value2;
// value = value1 % value2;  // bolumeden sonra kalanı gormek ıcın. Unutma [ % ] isareti burada [ kalan ] dir 


// Math operatorleri

value = Math.PI;                         // pi sayisini verdi
value = Math.E;                          // logaritma kat sayisini verdi
value = Math.round(3.6);                 // 3.6 yi yukari yuvarladi 4 yapti
value = Math.round(3.5);                 // 3.5 yi yukari yuvarladi 4 yapti
value = Math.round(3.4);                 // 3.4 yi asagi yuvarladi 3 yapti

value = Math.ceil(3.2);                  // [ceil] her zaman ondalikli sayiyi bir uste yuvarlar 
value = Math.ceil(1.14);


value = Math.floor(3.9);                  // [floor] her zaman asagi yuvarlar
value = Math.floor(2.3);


value = Math.sqrt(16);                   // [sqrt] kara kok alma
value = Math.sqrt(32);

value = Math.abs(-10);                   // [abs] mutlak degerini alma
value = Math.abs(-100);

value = Math.pow(8,3);                   // [pow] kuvvet alma. 8 in 3. kuvvetini aldi
value = Math.pow(9,4);


value = Math.max(10,-1,32,100);           // [max] verilen sayilar arasinda en yuksegini alir
value = Math.min(12,-4,43,54);            // [min] verilen sayilar arasinda en kucugunu alir

value = Math.random();                    // [random] 0 ve 1 arasinda rasgele bir sayi uretecek, ( 0 dahil ancak 1 dahil degil ). bunu sayfayi her yeniledigimizde yapicak

value = Math.random() * 20;               // bu islemde ise 0 ile 20 arasinda bir sayi uretecek
value = Math.random() * 20 + 1;           // bu islemde 0 ile 21 arasinda bir sayi uretecek

value = Math.floor(Math.random() * 20 + 1);  // burada ise 1 ile 20 arasinda tam sayi degerleri uretecek

console.log(value);