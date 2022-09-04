let value;

const numbers = [12,21,32,8,43,54,62,98];

const langs = new Array("javascript","html","css","react");

const a = ["hello",32,null,undefined,3.14];

value = numbers.length;

value = numbers[0];
value = numbers[3];
value = numbers[numbers.length - 1];

// herhangi bir index teki degeri degistirme

numbers[1] = 31;
value =numbers;

// index of

value = numbers.indexOf(31);

// array sonuna deger ekleme - [push] metedu

numbers.push(35);
value=numbers;

// array in basina ekleme yapma - [unshift] metedu
numbers.unshift(7);
value = numbers;


// array in sonundan deger atma - [pop] metodu

numbers.pop();
value = numbers

// array in basindan deger atma - [shift] metodu

numbers.shift();
value = numbers;

// array in belirli bir yerinde belirli bir yerine kadar eleman atma - [splice] metodu

numbers.splice(0,2);
value = numbers 

// array imizi tam tersine cevirme - [reverse] metodu

numbers.reverse();
value = numbers;

// [sort] metodu ile siralam
// sort sayilarin ilk rakamlarina gore kucukten buyuge siralar (23, 32, 4, 56, 7) gibi

value = numbers.sort();

// kucukten buyuge siralama

value = numbers.sort(function(x,y){
    return x - y;  // x-y isleminin sonucunda eksi(-) bir deger geliyor ise kucukten-buyuke siralar
})

// buyukten kucuke siralama

value = numbers.sort(function(x,y){
    return y - x;  // dikkatli bak yukartidakinin tam tersi, buseferde buyuk-kucuk siralamasi yapti
})

console.log(value);