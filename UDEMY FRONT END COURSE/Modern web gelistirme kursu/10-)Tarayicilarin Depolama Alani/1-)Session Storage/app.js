

// Bu bolumde tarayicilarin depolama alani olan [Session Storage] ve [Local Storage] i ogrenmeye calisicagiz

// Javascript uygulamalarimizda eger her hangi bir veri tabani kullanmiyor isek, tarayicilarin kendi icerisinde olan [Session Storage] ve [Local Storage] i kullanabiliriz

// Web gelistirici aracinda [application] da [Storage] icerisinde  [Session Storage] ve [Local Storage] var

// [Session Storage] ve [Local Storage] in calisma mantigi direck olarak ayni ama arasinda bir farklilik var

/* [Local Storage] da biz degerlerimizi depoladigimiz zaman, bu degerlerimiz biz ozellikle silmedigimiz zaman silinmiyor 
        yani biz browser i kapatsak, pc yi kapatsak  bile silinmiyor. Silme islemini biz kendimiz yapmadigimiz zaman degerlerimiz sabit kaliyor.
            Peki nasil sileriz, Javascript tarafinda silebiliriz yada [ application --> storage --> Local Storage ] kismindan silebiliriz
*/
          
/* [Session Storage] kelime anlami (oturum) dur. Bizim oturumumuz acik kaldigi surece depoladigimiz veriler burada kaliyor. 
      Ancak biz Sekmemizi kapatir isek yada Browser i kople kapatir isek bu verilerin hepsi silinir. 
*/

// Her iki Storage da (key) ve (value) var. Biz bir tane [key] veriyoruz ve bunun bir tane [value] si oluyor




//                                               [Session Storage] - Key & Value




// Button secimi

const add = document.querySelector("#add");
const del = document.querySelector("#delete");
const clear = document.querySelector("#clear");


// Input larin secimi

const addkey = document.querySelector("#addkey");
const addvalue = document.querySelector("#addvalue");
const deletekey = document.querySelector("#deletekey");

// AddEventListener ile olaylari tanimlayalim, fonksiyonlari olusturma

add.addEventListener("click",addItem);
del.addEventListener("click",deleteItem);
clear.addEventListener("click",clearItems);

function addItem(e) {
    // [addkey degerini alma],[addvalue degerini alma]
    // [setItem] (key, value)
    sessionStorage.setItem(addkey.value, addvalue.value);
}

function deleteItem(e) {
    // [removeItem] (key)
    sessionStorage.removeItem(deletekey.value);

}

function clearItems(e){
    // [clear()]
    sessionStorage.clear();

}