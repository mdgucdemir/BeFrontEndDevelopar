
// Yeni bir element olusturma


// ornek elementimiz

//<a href="#" id="clear-todos" class=" btn btn-dark">Delete All Tasks</a>

const newLink = document.createElement("a");

// [card-body] yi (getElementsClassName) ile secicegiz

const cardbody = document.getElementsByClassName("card-body")[1];

// yeni elementimize yeni bir [id] ve [class] verelim

newLink.id = "clear-todos";  
newLink.className = "btn btn-primary";
newLink.href = "https://www.google.com";
newLink.target = "_blank";

// Text verme 

// [Text Content] ile vermeyi daha once gorduk

// newLink.textContent = "Go an other Page";

/* 
 [Text Content] ile bir ozellik vermek sakincali.
            Ornegin bir [Card body] nin son kismina bir [Text content] ile ozellik vermek istersek 
                      tum [child] elementlerini ortadan kaldiracak ve verilen [text] i yeni ve genel ozellik yapacak

*/
// cardbody.textContent = "kdsfjasdjfg";

// eger biz son child a bir [text] vermek ister isek biz bunu; [Text Node] olarak eklememiz gerekiyor

// ornegin

// const text = document.createTextNode("whats up");
// cardbody.appendChild(text);
// console.log(cardbody);

newLink.appendChild(document.createTextNode("Go an other Page"));

// goruldugu gibi hersey tamam ama hala sayfada gozukmuyor, bunun icin;

cardbody.appendChild(newLink);


// console.log(cardbody);
console.log(newLink);