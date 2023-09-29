
// // -- Function Return Types & 'void'

function add(n1: number, n2: number) {
    return n1+n2;
}

// // void ==> you can use the all type. (number,string ect.)

function printResult(num: number): void { // this is void because you use string and number together
    console.log('Result: ' + num);
}

printResult(add(5,12));

// // undefined

function sdkfj(good: number):undefined {
    
    return; // if you want dont get an error at undefined function, you must use empty return
}