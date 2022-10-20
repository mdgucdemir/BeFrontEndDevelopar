//                          PROTOTYPE

// Biz javascript te OPP yapabiliyoruz. Biz obje olustura biliyoruz ve bu objelerin ozellikleri veya metodlari bulunabiliyor. 
// Ayni sekilde biz objelerimizi baska objelerden turetebiliyoruz javascript te
/*

   .Ancak Javascript in diger [C#, java, python] dillerden soyle bir farki var; 
   .C#, Java, Python gibi diller de de objelerimizi olustura biliyoruz ancak bu diller (class) tabanli dillerdir. 
   .yani biz bir class olusturuyoruz sonra bu class tan objelerimizi uretiyoruz.
   .Ama aksine Javascript class tabanli bir dil degil, Javascript (PROTOTYPE) tabanli bir dildir. 
   .Aradaki fark budur, javascript te bir class bulunmuyor. ES6 da class yazimi seni aldatmsin
   .Zira biz ES6 ile class yazicaz ama bunlar arka tarafta prototype donusturulecekler.
   .ES6 bizim soz dizimi standartlarimiz dir

*/
//---------------------------------------------

// // Javascript te her bir objenin kendi icerisinde bir prototype i bulunuyor.
// // Javascript te en temel Constructor imiz object constructor dir

// const object = new Object();
// // dedigimiz zaman en temel object constructor olusmus oluyor
// const object2 = new Object();
// // bir tane obje olusturdugumzu zaman otamtikman bir tanede icerisinde prototype olusuyor. Ve bu prototype larin kendi icerisinde metodlari var 
// object.name="memo";

// // Ornek te tanimlanmis iki object var, ama objeler farkli olsa da prototype lar ayni. Yani tek bir prototype tan isi goturuyorlar.
// console.log(object);

//-------------------------------------------

function Employee (name,age){
    this.name = name;
    this.age = age;
    this.showInfo = function(){
        console.log("Bilgiler Gosteriliyeee");
    }
    this.toString= function(){
        console.log("bu bir employee")
    }
}
const emp1 = new Employee("memo",21);
console.log(emp1);


// Ornek te goruldugu uzere olusturdugumuz objenin bir prototype i ve o prototoype inda bir prototype i var . 
// Javascript te buna [prototype chain] prototype zinciri denilir. bu sayede prototype leri biz zincirleme olusturmus oluyoruz

// peki en temel prototype nereden geliyor dersen Object ten geliyor. 
// Object te yani en temel prototype ta yazilan metotlari [INHERITANCE] yani [miras] almis oluyoruz.  

// Yani her bir objemiz Javascript teki Object Prototype indan miras(inheritance) aliyor

console.log(emp1.toString()); // burada ise ( toString ) tanimladigimiz objeye gitti, 

// bu obje tanimlanmis mi diye en yukaridan asagiya dogru tarama yapiyor.