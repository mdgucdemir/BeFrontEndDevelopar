//                 Prototype Tabanli Kalitim (Miras)

// ES6 dan sonra bu tarz kalitim islemleri yapilmamaya baslandi. Ancak bu isin arka plani oldugu icin buna bazen ihtiyacimiz olabilir. Orenmekte yarar var.

// Hocanin Kalitim Dedigi aslinda Miras -- Inheritance = Bir objenin baska bir objeden metodlarini veya ozelliklerini Miras almasidir.

/*
   Ornek ile anlatmak gerekirse; her calisan (Employee) bir kisi (Person) dir.
   Her bir Calisan(Employee) ozelliklerini, Kisi(Person) nin ozelliklerinden miras alir
   Nitekim calisan grubu nu olusturan unsur Kisilerdir. Dolayisi ile Kisilerin (name), (age) etc. gibi ozellikleri Calisanin da ozelligidir.
*/

function Person (name,age){
    this.name = name;
    this.age = age;
}

Person.prototype.ShowInfos = function(){
    console.log("Name: " + this.name + " Age: " + this.age);
}

// const person = new Person("Mehmet",23);
// console.log(person);

function Employee (name,age,salary){
    // this.name = name;
    // this.age = age;

    // Name ve age i Person dan call veya apply ile almayi dene ------------------- .call(object,ozellik,ozellik)------- gibi

    Person.call(this,name,age);   //// buradaki this Employee yi gosterir ve Employee deki name age leri person daki name age e esitler
    


    this.salary = salary;
}



// Employee nin Person dan miras (Inheritance) almasini istiyoruz.

Employee.prototype = Object.create(Person.prototype);
// Employee nin prototype i Person in prototype inda ki tum ozellik ve metodlari miras aldi


// ( Override (GECERSIZ KILMA) ) Metodu uygulayarak Person in prototype inda olan toString i Employee de tanimlayalim

Employee.prototype.toString = function(){
    console.log("Employeee");
}

// Console baktigimizda Employee butun metodlari Person dan aliyor o yuzden salary ve onun degeri gozukmuyor. bunu engellemek icin kendi ShowInfos metodu olsun

Employee.prototype.ShowInfos = function(){
    console.log("Name: " + this.name + " Age: " + this.age + " Salary: " + this.salary);
}

const emp = new Employee("mehmet",23,12345);

console.log(emp);
// emp.ShowInfos();
// emp.toString();
