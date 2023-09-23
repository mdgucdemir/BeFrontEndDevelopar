
// // DEFAUL PARAMETER
function topla4(x:number,y:number=4):number {
    return x+y;
    // bu ornekte x=3 y=4
}
console.log(topla4(3))


function topla5(x:number,y:number=4):number {
    return x+y;
    // bu ornekte x=3 y=8
}
console.log(topla4(3,8))

// // 


// // // OPTIONAL PARAMETER
// function topla6(x:number,y?:number):number {
//     return x+y;
//     // bu ornekte cikti NaN (not a number) donucek
// }
// console.log(topla4(3))

function topla7(x:number,y?:number):number {
    
    if(y) {
        return x+y;
    }
    return x;
}
console.log(topla7(3))

// function topla8(x?:number,y:number):number {
    
//     if(y) {
//         return x+y;
//     }
//     return x;
//     // optional ozelligi ilk elemandan baslamaz. bir dusun verilen degerin x mi ye mi olacagina nasil karar vericez
// }
// console.log(topla8(3))
