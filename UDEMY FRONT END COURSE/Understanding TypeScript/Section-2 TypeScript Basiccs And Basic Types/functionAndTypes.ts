

// // Function Types & Callback

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    let result = n1 + n2;
    cb(result);
}

addAndHandle(10, 23, result => {
    console.log(result);
})

