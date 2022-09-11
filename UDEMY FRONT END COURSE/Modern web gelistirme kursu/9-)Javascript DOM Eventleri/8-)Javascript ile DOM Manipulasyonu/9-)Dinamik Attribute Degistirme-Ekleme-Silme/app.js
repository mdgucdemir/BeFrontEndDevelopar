
// <input class="form-control" type="text" name="todo" id="todo" placeholder="please entry a todo">  ornek 

const todoInput = document.getElementById("todo");

let element;

element = todoInput;
element = todoInput.classList; // DOMTokenList geldi
element = todoInput.classList.length;  // uzunlugu ise [1]

// yeni class ekleme

// todoInput.className = "form-control newClass";

// yada 

// todoInput.classList.add("newClass");
// todoInput.classList.add("USA");

// class cikarma

// todoInput.classList.remove("form-control");

// element = todoInput;

// element = todoInput.placeholder;
element = todoInput.setAttribute("placeholder", "Hello");
element = todoInput.setAttribute("title", "input");
todoInput.removeAttribute("name");  // name attribute kaldirildi


element = todoInput;

// attribute kontrolu

element = todoInput.hasAttribute("name");  // var ise [true] yok ise [false] donucek

console.log(element);