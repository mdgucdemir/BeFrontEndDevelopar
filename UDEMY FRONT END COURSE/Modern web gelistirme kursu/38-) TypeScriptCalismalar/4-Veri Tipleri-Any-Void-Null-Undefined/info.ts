

// // -- ANY 
// Any bize gelicek olan data nin veri tipinden emin olmadigimiz zaman kullaniriz. Any de butun veri type larini kullanabiliriz

let deger: any = 'ankara'
deger = 2
deger = {}



// // -- VOID
// void genellik le function larda kullanilir. function in herhangi bir deger vs. dondurmesini istemedigimz yerlerde kullaniriz. 
// normal primitive seklinde de kullaniriz. Ama string number bir deger alamaz (hata verir) (undefined) i alabilir

let deger2: void = undefined

function barzo():void{
    console.log('fosik');
}


// null ve undefined farkli seylerdir. genelde karistirilir. kabaca [undefined = tanimsiz] [null = bos deger] diyebilir 
