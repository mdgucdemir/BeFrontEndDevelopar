
let value;


const programmer = {
    // biz obje lerimizi suslu parantez ile olustururuz

    name : "Mehmet Deniz Gucdemir",
    age : "32",
    email : "md.gucdemir@gmail.com",
    langs : ["pyton", "java", "javasvript"],

    address : { // ic-ice obje olusumu
        city : "Austin",
        street : "298 San Antonio"
    },

    work : function(){
        console.log("programci calisiyor...");
    }
}

value = programmer;

// objenin metodlarina , ozelliklerine erisim

value = programmer.email;
value = programmer["email"];

value =programmer.langs

value = programmer.address.city;

//function a ulasim

programmer.work();


const programmers = [ //bu array imiz obje lerden olusan bir array oldu
    {
        name: "mehmet deniz",
        age: 32
    },

    {
        name: "edward m.d",
        age: 32
    }
]

value = programmers[0];
value = programmers[1].name;

console.log(value);