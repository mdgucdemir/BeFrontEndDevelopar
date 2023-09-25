
// // --- LOOPS ---
// // forin ve forof 

let cities = [
    'Austin',
    'Dallas',
    'Houston'    
]

for(let i in cities){
    console.log(i);
    // cikti => 0 1 2 (yani index i vericek)
    // index istiyor isen forin
}

for(let i of cities) {
    console.log(i);
    // cikti => Austin Dallas Houston (yani Data yi vericek)
    // data yi istiyor isen forof
}