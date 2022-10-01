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
  secondCardBody.addEventListener("click",deleteTodo);
  filter.addEventListener("keyup",filterTodos);
  clearButton.addEventListener("click",clearAllTodos);
}

function clearAllTodos(e){
  if (confirm("Do you want to delete all ?")){
    
    // tum todolari UI dan silme
    
    while(todoList.firstElementChild != null) { // todo list in firstElementChild i null olana kadar dongu devam eder

      todoList.removeChild(todoList.firstElementChild);

    }
    
    // local storage dan silme
    // local storage dan silmek cok kolay. Sadece [key] i siler isek tumunu sileriz

    localStorage.removeItem("todos");
  }
}

function filterTodos(e){
  const filterValue = e.target.value.toLowerCase(); // buyuk-kucuk harf duyarliligi olmasin diye hepsini kucuk harf e cevirdik
  const listItem = document.querySelectorAll(".list-group-item"); // tum li leri sectik

  listItem.forEach(function(listItem) {

    const text = listItem.textContent.toLowerCase();

    if (text.indexOf(filterValue) === -1){
      // bulamadi

      listItem.setAttribute("style","display: none !important");
    }
    else {
      listItem.setAttribute("style","display: block");
    }

  }); // tum li lerin uzerinde tek tek geziniyoruz
}

// todo UI dan silme --------------------------------------

function deleteTodo(e){
 
  if(e.target.className === "fa fa-remove"){
    e.target.parentElement.parentElement.remove();
    deleteTodoFromStorage(e.target.parentElement.parentElement.textContent)
    showAlert("success","You deleted succussfully todo");
  }
}
//----------------------------------------------------------

// todo storage dan silme ----------------------------------

function deleteTodoFromStorage (deleteTodo){

  let todos = getTodosFromStorage();

  todos.forEach(function(todo,index){
    if (todo === deleteTodo){
      // artik array dan silecegimiz icin [splice] i kullanacagiz
      // ilk once index i bul sonra kacinci index ten itibaren kac tane eleman silecegimizi yaz(1,2,3 gibi) 
      todos.splice(index,1);
    }
  });
  // tekrardan local storage a todos array ini yazmamiz gerekiyor
  localStorage.setItem("todos",JSON.stringify(todos));
}
//----------------------------------------------------------


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

