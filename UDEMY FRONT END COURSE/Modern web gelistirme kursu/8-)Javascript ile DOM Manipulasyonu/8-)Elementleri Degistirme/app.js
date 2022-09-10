
// REPLACE

// Ornek uzerinden anlatilacak

// Elementleri birbirleri le degistirmeye calisacagiz

// [card-body] nin child i olan [h5] elementimizin [child] ini baska bir element ile degistirecegiz

// <h5 class="card-title" id="tasks-title">Todos</h5>

const cardbody = document.querySelectorAll(".card-body")[1];

const newElement = document.createElement("h3");
newElement.className = "card-title";
newElement.id = "tast-title";
newElement.textContent = "New Todos";

// Eski element secimi 

const oldElement = document.querySelector("#tasks-title");

// Eski element secildi, yeni element olusturuldu , simdi ise bunlari [Replace] etmemiz gerekiyor

// bunun icin [replaceChild (NewChild, OldChild)] kullanicaz

cardbody.replaceChild(newElement, oldElement);

console.log(newElement);