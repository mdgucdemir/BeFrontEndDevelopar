
// donguler belirli kosullarda kendi block larini surekli calistirirlar

//                                               [ While ] Donguleri

// while dongunun icinde bir kosul olacak ve bu kosul olusana kadar kendi icindeki islemleri tekrar edecek 

// let i = 0;

// while (i < 10){
//     console.log (i);
//     // biz burada [i] degiskenini artirmaz isek dongu sonsuza kadar calisacak
//     //biz buna [sonsuz dongu] diyoruz.

//     i++;  //[ i = i + 1; yada i += 1; ]
// }

// let i = 10;

// while(i > 0){
//     console.log(i);
//     // i--;

//     i-=2;
// }




// dongulerde [break] ve [continue]



// [break]


// break dongulerde yazildigi yerde kosul dogru olsa bile donguyu bitiriyor, kiriyor.

// let i = 0;

// while(i < 10){
//     console.log(i);
//     // i--;
 
//     if(i==5){
//         break;
//     }
//     i++;
// }



// [continue]


// biz dongumuzun herhangi bir yerinde continue yazarsak ve continue calisirsa, dongunun geri kalani calistirilmadan dongunun en basina doner ve tekrardan kosumuzu kontrol etmeye baslar

// let i = 0;

// while(i < 10){
//     if (i == 3 || i == 5){
//         i++;
//         continue;

//     }
//     console.log(i);
//     i++;
// }


//                                             [ Do While ] Donguleri

// do while dongulerinin en az 1 kere calisma garantisi war

// let i = 0;

// do {
//     console.log(i);
//     i++;

// } while(i < 10);

// bunun  ozelligi ilk basta kosulu kontrol etmiyoruz, [do] block unu calistiriyoruz - sonra kosulumuzu kontrol ediyoruz.

//                                                        [For] Donguleri


// for deongusu 3 farkli kisim icerir
// 1. kisim degiskeinimizi tanimladigimiz kisim (let i = 0; gibi) 
// 2. kisim dongu kosulunu yazdigimiz kisim (i < 19 gibi)
// 3. kisim artirim yada azaltim kismi (i++ gibi)

// bu islemin adi iterasyon

// let langs = ["java","javascript","python"]

// for (let index = 0; index < langs.length;index++) {

//     console.log(langs[index]);
// }

//                                                [forEach] metodu

// let langs = ["java","javascript","python"]

// langs.forEach(function(mang,fosik){
//     console.log(mang,fosik)
// });


//                                                 [map] metodu

// react gibi fream work lerde oldukca fazla kullanilir

// const users = [ 
//     {name:"edward",age:34},
//     {name:"mehmet",age:32},
//     {name:"deniz",age:33}
//     ];

// const names = users.map(function(user){
//     return user.name;
// });
// const ages = users.map(function(user){
//     return user.age;
// });

// console.log(names);
// console.log(ages);

//                                              [for in ] loop



const user = {
    name: "mehmet",
    age: 32
};

for(let a in user){
    console.log(a,user[a]);
}