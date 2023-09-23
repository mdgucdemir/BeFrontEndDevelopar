
// // -- NUMBER -- VERI TIPLERI

// let sayi:number
let sayi:number = 2

sayi = 10
sayi = 10.5


// // -- STRING -- VERI TIPLERI

let city : string = 'asdkf'
// let city : string

city = 'austin'
city = 'barzo city'


// // -- BOOLEAN -- VERI TIPLERI

let dogruMu:boolean = true
// let dogruMu:boolean

dogruMu = true
dogruMu = false



// // -- ARRAY -- VERI TIPLERI

let sayilar:number[] = [1,2,3,4,]
let harfler: string[] = ['a','1','dsfjklasjd']
let bool: boolean[] = [true,false,true,false]

// generik tanimlama 
let fosikler: Array<string> = ['sadfl','asdfsdf']
let sayilar2: Array<number> = [1,2,3,4,]
let sayilar3: Array <number> = [1,2,3,4,5]



// // -- TUPLE -- VERI TIPLER 
let dizi :[number,string] = [2,'asdfjklf']
dizi[0]  // sonuc 2 
dizi[1]  // sonuc asdfjklf 



// // -- ENUM -- VERI TIPLERI 

enum Renk {Kirmizi=1,Siyah,Mavi}
let renk: Renk = Renk.Kirmizi