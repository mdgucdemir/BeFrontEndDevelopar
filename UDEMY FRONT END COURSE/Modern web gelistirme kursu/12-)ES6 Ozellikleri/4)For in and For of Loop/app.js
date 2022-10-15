
// For In & For Of

const person = {
    name:"MDeniz",
    age:32,
    salary:23700

};

const langs = ["python","java","c++","php"];

const name = "MDENIZ";

// FOR IN LOOP    | for(let ... in ...) |

// Object

// for(let prop in person){
//     console.log(prop,person[prop]);
// }


// Array

// for (let index in langs){
//     console.log(index,langs[index]);
// }


// String

// for (let index in name) {
//     console.log(index,name[index]);
// }



// FOR OF LOOP     | for (let ... of ...) |


// For of donguleri ile [object] lerin uzerinde gezinemiyoruz. Ama Sadece Array e benzeyen yapilar uzerinde gezinebiliyoruz. Buna String de dahil

// Object Check

// for (let value of person){
//     console.log(vsalue);
// }

// Array 

// Array imizin index i uzerinde degil degerleri uzerinden gezinebiliriz

// for (let index of langs){
//     console.log(index);
// }


// String

for (let fosik of name){
    console.log(fosik);
}