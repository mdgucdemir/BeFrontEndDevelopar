/* Switch Case */

// [switch case] ler [if] [else] lerin yerine kullanabilecegimiz bir yapi

// const process = 2;

// if (process === 1){
//     console.log("process 1");
// }
// else if (process === 2){
//     console.log("process 2");
// }
// else if (process === 3){
//     console.log("process 3");
// }
// else {
//     console.log(" no process");
// }

const process = 3;

switch (process) {
    case 1:
        console.log("process 1");
        break;
    case 2:
        console.log("process 2");
        break;
    case 3:
        console.log("process 3");
        break;
    default:
        console.log("no process");
        break

}

// not = eger [case] lerin bitiminde [break] i yazman isen altaki case le birlikte yazar
// ornegin case 1 ve case 2 yi birlikte calistirir
// [case] in isi bince muhakkak [break] i yazmalisin