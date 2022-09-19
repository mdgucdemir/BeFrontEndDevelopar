
//                                                          Local Storage


// Ic yapisi [Session Storage] a beziyor. Ayni key ve value burda da var

// Local storage de biz degerlerimi istersek browser daki [application], yada javascript ile silebiliriz

//                                          [Local Storage] 



//                           setItem (deger atama)

// localStorage.setItem("hareket","burpee");
// localStorage.setItem("tekrar",50);

// Onemli Not = biz local storage her gonderdigimiz deger [String] olarak gider. Biz [integer] gondersek dahi onu string e cevirip [String] bir deger olarak kaydediyor
// Bunu gormek icin bir ornek yapalim

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------

//                         getItem (deger alma)

// Ornek olmasi icin tekrar key inin degeri olan 50 li alicaz ve bunun type nin number degil string oldugunu gorucez

/*
  Ne demistik local storage de degerler biz sildigimiz surece siliniyor. Biz degerleri atadik sonra code leri command yaptik.
  Ama biz hala hareket key ininin degerini cekebiliyoruz 
*/

// const value = localStorage.getItem("tekrar");
// console.log(value);
// console.log(typeof value);

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------

//                       Clear Local Storage

// localStorage.clear();


//----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// localStorage.setItem("hareket","burpee");
// localStorage.setItem("tekrar",50);

// console.log(localStorage.getItem("sport"));       // sport olmadigi icin (null) bir deger verecek

// if (localStorage.getItem("tekrar") === null) {
//     console.log("aradigin deger burada yok :(")
// }
// else {
//     console.log("aradiginiz deger burada var :)")
// }

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------

//                                                  Local Storage Array yazma


// Local Storage a Array yazmak icin farkli bir islem yapmak gerekiyor, cunku local storage sadece string ifade kabul ediyor 

// const todos = ["todo 1","todo 2","todo 3"];

// localStorage.setItem("sodot", todos);  // todos lari yazdi ama hepsini string e cevirdi ama bizim istedigimiz array halinde yazilmasiydi

// console.log(typeof localStorage.getItem("sodot"));

// array olarak yazip array olarak almak istiyorsan [JSON] un icindeki 2 tanes fonction i kullanicaz

// localStorage.setItem("sodot", JSON.stringify(todos)); // JSON ile array olarak yazdi

// const value = JSON.parse(localStorage.getItem("sodot"));
// console.log(value);

// Array yazarken (JSON.stringify)
// Array okurken (JSON.parse)

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// todo form input una todos gir ve onlari array olarak yazdir

const form = document.getElementById("todo-form");
const todoInput = document.getElementById("todo");


form.addEventListener("submit",addTodo);

function addTodo(e) {

    const value = todoInput.value; // input tan degerimizi aldik

    /*
     biz aldigimiz degeri bir array olarak yazmak istiyoruz,
      ama bizim local storage imizda o dger var sa onu ilk basta elde edip daha sonra bu degeri onun uzerine eklememiz, sonra tekrardan yazmamiz gerekiyor.
    */

    // ama degerimiz yoksa ilk basta onu olusturmamiz gerekiyor

    let todos;

    if (localStorage.getItem("todos") === null){
        // todos yok ise ilk basta biz bunu [bos] baslatacagiz 
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.push(value); // value yi array e ekleme

    // array imizi local storage tekrar yazdirma

    localStorage.setItem("todos",JSON.stringify(todos));
    

    e.preventDefault() // submit olduktan sonra kendi sayfamiza gitmemizi onlemek icin
}