

function topla(x,y) {
    return x+y;
    // bu javascript yazimidir
}

function topla2(x:number,y:number):number {
    return x+y;
    // bu typescript yazimidir
    // x bir number
    // y bir number
    // function result i bir number
    // demektir
}

let topla3 = function(x:number,y:number):number {
    return x+y;
}


console.log(topla(2,4));
console.log(topla(2,"ankara"));
console.log(topla2(4,2));
console.log(topla3(4,8));