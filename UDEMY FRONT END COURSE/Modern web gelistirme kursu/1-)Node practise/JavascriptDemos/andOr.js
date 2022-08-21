// (and && ve kosulu) (or || veya kosulu) boyle gosterilir
// sayi1=10 veya sayi1=sayi2 bir esitlik gostergesidir
// sayi1==sayi2 veya sayi1==1 karsilastirma esit olup olmadigini sorgulama seklidir

var sayi1 = 10
var sayi2 = 20
var sayi3 = 30

if(sayi1==sayi2 && sayi1==sayi3){
    console.log("tum sayilar esit")
} 
 else if(sayi1==sayi2 || sayi1== sayi3)
 {
 console.log("sayilardan ikisi esit")
 }
 else{
     console.log("sayilar esit degil")
 }