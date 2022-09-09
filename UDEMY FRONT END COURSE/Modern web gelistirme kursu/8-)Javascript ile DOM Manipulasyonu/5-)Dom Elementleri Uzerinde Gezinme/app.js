 let value;

const todoList = document.querySelector(".list-group");

const todo = document.querySelector(".list-group-item:nth-child(2)");

const cardrow = document.querySelector(".card.row"); // 2 class birden secim yaptik

value = todoList;
value = todo;
value = cardrow;


// Child Nodes metod

value = todoList.childNodes; 
// 9 adet element geldi
// bizim 4 adet elementimiz var ama [childNodes] ile baktigimizda 9 adet gozukuyor
// bunun sebebi; [li] ler arasinda alt-alta yazmak icin [satir] atladigimiz icindir. Sayet satir atlamaz isek bu sayi dusecektir

// ornekle bakmak gerekirse

value = todoList.childNodes[0];

// ilk elemanimizi cagirip icerisni inceler isek [data:\n\n] diye bir olayla karsilasiriz, bu [satir] atlamalarinda bir [text] olarak kabul gordugunu bize gosterir

// peki bir eger satir atlamalari istmez isek, sadece elementleri almasini istersek

// bunun icin [children] metodunu kullancagiz


// [Children] metodu

// not [ChildNodes] da (text) dahil aliyor ama [Children] da ise sadece elementleri aliyor 

value = todoList.children;

// sadece 4 adet olan elementleri aldi. [HTMLCollection] olarak geldi.

value = todoList.children[0];
value = todoList.children[todoList.children.length - 1];

value = todoList.children[2].textContent = "Changed";

value = cardrow;
value = cardrow.children;


 console.log(value);