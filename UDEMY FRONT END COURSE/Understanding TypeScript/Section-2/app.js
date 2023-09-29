// // Function Types & Callback
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addAndHandle(10, 23, function (result) {
    console.log(result);
});
