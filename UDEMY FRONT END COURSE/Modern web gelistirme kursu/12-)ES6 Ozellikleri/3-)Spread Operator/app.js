
// Spread Operator

// const langs = ["Python","C++","Java","Php"];

// console.log(langs); 

// Array halinde degilde ayrik tek bir satir olarak yazilmasini istiyor isek

// console.log(langs[0],langs[1],langs[2],langs[3]);

// bunu daha kolay bir sekilde yazmak icin [spread operator] kullanilir oda uc nokta (...) ile yapilir, Ornegin console.log(...langs) gibi.

// console.log(...langs);

// const langs2 = ["Javascript","C#",...langs]; 
// langs, langs2 inin icine tek tek yazilmak yerine spread operator ile tek bir array icine yazildi


// console.log(langs2);


// spread operator ornekler

// const numbers = [1,2,3,4,5,6,7,8,9];

// const [a,b,...numbers2] = numbers;

// console.log(a,b);
// console.log(numbers2);


const addNumberss = (a,b,c) => console.log(a+b+c);

const numbers = [100,200,300];

// addNumberss(numbers[0],numbers[1],numbers[2]);

// spread operator ile

addNumberss(...numbers);