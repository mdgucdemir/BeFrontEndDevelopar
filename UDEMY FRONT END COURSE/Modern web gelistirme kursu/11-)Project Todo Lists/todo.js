// Todo project

// Tum elementleri secme

const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelector(".card-body")[0];
const secondCardBody = document.querySelector(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");


// tum eventleri bir fonction da toplayalim

eventListeners();

function eventListeners(){
    form.addEventListener("submit",addTodo);
}

function addTodo(e){
    const newTodo = todoInput.value.trim();
    // [.trim()] fonction i stringlerin basindaki ve sonundaki gereksiz bosluklari onlemek icindir

    // yeni todo lari UI(user interface) e yazdirmak icin bir fonction cagirma
    addTodoToUI(newTodo);



    // sayfayi default olarak yenilememesi icin [e.preventDefault();]
    e.preventDefault();
}

function addTodoToUI(newTodo){
    // bu fonstion string degerini list item olarak UI a ekleyecek

    // dinamic olarak element ureticez(li elementi)

    /*
     <li class="list-group-item d-flex justify-content-between">Todo 1
       <a href="#" class="delete-item">
         <i class="fa fa-remove"></i>
       </a>
     </li>
    */
   
     // List item olusturma
     const listItem = document.createElement("li"); // creat new "li" element

     listItem.className = "list-group-item d-flex justify-content-between";  
    
     // Link olusturma
     const link = document.createElement("a"); // creat new "a" element

     link.href = "#";
     link.className = "delete-item";
     // innerHTML ile (<i class="fa fa-remove"></i>) olusturabiliriz
     link.innerHTML = "<i class='fa fa-remove'></i>"

     //-----------------------------------------------------------------------------

     listItem.appendChild(document.createTextNode(newTodo)); // textnode olusturma
     listItem.appendChild(link); // asagida olusturdugumuz link i appendChild olarak eklemek
     
     // todoList (ul) e listItem(li) i ekleme
     todoList.appendChild(listItem);
}