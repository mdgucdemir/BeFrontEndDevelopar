// while bir dongudur turkece anlami iken dir
// yazim kosullarina gore sonlu ve sonsuz dongu olabilir (infinite loop=sonsuz dongu)

// var sayi =10
//                           burasi infinite loop sonsuz dongudur sayi=10 ve sayi hep >=10 oldugu icin donguden cikamaz
// while(sayi>=10){
//     console.log(sayi)
// }

var sayi = 1

while(sayi<=10){
    console.log(sayi)                          // 1 den 10 kadar yazdi ve donguden cikti
    sayi = sayi + 1
}

// var sayi = 0

// while(sayi<=10){
//     console.log(sayi)                          // 1 den 10 kadar cift sayilari yazdi ve donguden cikti
//     sayi = sayi + 2
// }


// var sayi = 1

// while(sayi<=10){
//     console.log(sayi)                          // 1 den 10 kadar tek sayilari yazdi ve donguden cikti
//     sayi = sayi + 2
// }