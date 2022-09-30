// Todo project


// Element secimi

const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");


// tum eventleri bir fonction da toplayalim

eventListeners();

function eventListeners(){
  form.addEventListener("submit",addTodo);
  document.addEventListener("DOMContentLoaded",loadAllTodosToUI);
}


function loadAllTodosToUI(){

  let todos = getTodosFromStorage();

  todos.forEach(function(todo){
    // todo lar uzerinde tek tek gezinme
    addTodoToUI(todo); // local storage da ki todo lari UI a cekme
  })
}


function addTodo(e){
    const newTodo = todoInput.value.trim();
    // [.trim()] fonction i stringlerin basindaki ve sonundaki gereksiz bosluklari onlemek icindir

    if (newTodo === ""){
      /*
      <div class="alert alert-danger" role="alert">
        This is a danger alert—check it out!
      </div>
      */

      // showAlert("type","message");

      showAlert("danger","Please write a Todo");
    }
    else{

       // yeni todo lari UI(user interface) e yazdirmak icin bir fonction cagirma
    addTodoToUI(newTodo);
    addTodoToStorage(newTodo);
    showAlert("success","You're welcome")
    }
       // sayfayi default olarak yenilememesi icin [e.preventDefault();]
    e.preventDefault();
}


function getTodosFromStorage(){ // todo lari local storage dan alma
  let todos;

  if (localStorage.getItem("todos") === null){
    todos = [];
  }
  else{
    // array e cevirme
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  return todos;
}


function addTodoToStorage(newTodo){
  let todos = getTodosFromStorage();

  todos.push(newTodo); // yeni degeri todo ya ekleme
  
  localStorage.setItem("todos",JSON.stringify(todos)); // aldigimiz todo yu tekrar dan bunun icine gonderiyoruz
}

function showAlert(type,message){
  const alert = document.createElement("div");

  alert.className = `alert alert-${type}`;
  alert.textContent = message;

  firstCardBody.appendChild(alert);

  // setTimeout
  window.setTimeout(function(){
    alert.remove();
  },1000);
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

     // input eklemeden sonra kalan yaziyi silme
     todoInput.value = "";
}

