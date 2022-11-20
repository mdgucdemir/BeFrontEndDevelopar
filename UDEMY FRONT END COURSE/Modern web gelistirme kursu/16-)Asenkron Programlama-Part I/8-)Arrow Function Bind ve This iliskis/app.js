
const person = {
    age: 23,

    // tellAge: function(){

    //     // bura daki (this) -- (person abject) ini gosteriyor
    //     console.log(this);
    //     console.log(this.age);
    // }

    // // burada tanimlanan, (this) ise (global scope) u yani (window objesini) gosteriyor
    // .bind(this)

    // (Arrow function) ile normal function arasindaki farki gorelim
    
    tellAge: () => {
        console.log(this);
        console.log(this.age);

        // Arrow function olarak yazimlarda (this) normal function dan farkli olarak (window object) i gosterdi
        // Normal yazim olan function da (person) objesini verirken Arrow function da (window) objesini verdi
    }
    
}

person.tellAge();