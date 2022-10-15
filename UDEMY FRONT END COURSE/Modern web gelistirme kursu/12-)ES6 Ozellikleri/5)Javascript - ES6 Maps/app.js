
// Map

// Map lerin calisma mantigi

// Maps - Key - Value
// Map - Key ve ona karsilik gelen Value
// burada integer lar da key olabilirler

// Map olusturma

// let myMap = new Map();

// console.log(typeof myMap);
// console.log(myMap);

// key olusturma

// const key1 = "Mdeniz";
// const key2 = {a:12,b:23};
// const key3 = () => 31;

// Map deger atama [ SET ] metodu
// map.set(key,value);

// myMap.set(key1,"String Deger");
// myMap.set(key2,"Object Literal Deger");
// myMap.set(key3,"Function Deger");


// Map lerden bir tane key e karsilik gelen degeri almak icin [ GET ] metodunu kullanacigiz

// console.log(myMap.get(key1));
// console.log(myMap.get(key2));
// console.log(myMap.get(key3));

// console.log(myMap);

// Map boyutu Yani Map in kac tane elemani var ?
// console.log(myMap.size);


const cities = new Map();

cities.set("Austin",3);
cities.set("Boston",2);
cities.set("New York",8);
cities.set("San Francisco",4);

// ForEach dongusu ile map te gezinme

// cities.forEach(function(value,key){
//     console.log(key,value);
// })

// Javascript teki Map lar Python daki dictionary ozelligine cok benzerdir.

// For of dongusu ile gezinme 

// for (let value of cities){
//     console.log(value);

//     // goruldugu uzere for of metodunda her bir value umuz tek tek array e donustu
// }

// tek tek gezinmek icin key of metodunda

for (let[key,value] of cities){
    console.log(key,value);

    // aslinda burada Destructing yapisi var
}